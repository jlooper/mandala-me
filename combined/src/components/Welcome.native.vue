<template>
<MultiDrawer>
  <StackLayout slot="left">
    <Image
      :src="paintingImage"
      width="50%"
      :visibility="paintingImage ? 'visible' : 'collapsed'"
      stretch="aspectFit"
    />
    <Button
      text="Upload"
      width="50%"
      :visibility="paintingImage ? 'visible' : 'collapsed'"
      class="btn btn-primary btn-rounded-sm"
      @tap="upload()"
    />

    <GridLayout rows="auto,auto,auto" horizontalAlignment="center">
      <StackLayout row="0" orientation="horizontal">
        <Button text="Save" @tap="getMyPainting" class="btn btn-primary btn-rounded-sm"/>
        <Button text="Clear" @tap="clearMyPainting" class="btn btn-primary btn-rounded-sm"/>
        <Button text="Color" @tap="pickColor" class="btn btn-primary btn-rounded-sm"/>
      </StackLayout>

      <Button
        android:visibility="collapse"
        text="Airbrush"
        @tap="selectAirBrush"
        class="btn btn-primary btn-rounded-sm"
        row="1"
      />
      <Button
        android:visibility="collapse"
        text="Paintbrush"
        @tap="selectPaintBrush"
        class="btn btn-primary btn-rounded-sm"
        row="2"
      />
    </GridLayout>

    <GridLayout padding="10" rows="auto" columns="auto, *">
      <Label text="Width:" class="message" textWrap="true" row="0" col="0"/>
      <Label :text="drawWidth.toFixed(2)" class="message" textWrap="true" row="0" col="1"/>
    </GridLayout>
    <Slider
      margin="10"
      backgroundColor="#ff4801"
      id="widthSlider"
      :value="drawWidth"
      @valueChange="widthChange($event)"
      maxValue="50"
      minValue="1"
    />

    <GridLayout padding="10" rows="auto" columns="auto, *">
      <Label text="Opacity:" class="message" textWrap="true" row="0" col="0"/>
      <Label :text="drawOpacity.toFixed(2)" class="message" textWrap="true" row="0" col="1"/>
    </GridLayout>

    <Slider
      margin="10"
      backgroundColor="#ff4801"
      id="opacitySlider"
      :value="drawOpacity"
      :maxValue="maxOpacity"
      @valueChange="opacityChange($event)"
      minValue="0"
    />

    <GridLayout android:visibility="collapse" padding="10" rows="auto" columns="auto, *">
      <Label text="AirBrush Flow:" class="message" textWrap="true" row="0" col="0"/>
      <Label :text="airbrushFlow.toFixed(2)" class="message" textWrap="true" row="0" col="1"/>
    </GridLayout>

    <Slider
      android:visibility="collapse"
      margin="10"
      backgroundColor="#ff4801"
      id="airBrushFlowSlider"
      :value="airbrushFlow"
      @valueChange="airbrushFlowChange($event)"
      maxValue="1"
      minValue="0"
    />
  </StackLayout>

  <!--main area-->
  <StackLayout>
    <Label class="fa white navigator" text.decode='&#xf0c9;' @tap="open()"/>

    <GridLayout rows="80,auto,*" slot="default" class="card">
      <Image row="0" src="~/assets/mini-mandala.png" class="mini-mandala"/>
      <Image row="1" src="~/assets/logo.png" width="400"/>
      <PaintPad
        row="2"
        canvasColor="transparent"
        ref="paintPad"
        margin="10"
        :drawColor="drawColor"
        :drawWidth="drawWidth"
        :airbrushFlow="airbrushFlow"
        :drawOpacity="drawOpacity"
        style="border-radius:5;border-width:2px;opacity:1"
      />
    </GridLayout>
  </StackLayout>
</MultiDrawer>
</template>

<script>
import { PaintPad } from "nativescript-paint";
import { ColorPicker } from "nativescript-color-picker";
import * as platformModule from "tns-core-modules/platform";
import * as fs from "file-system";
import * as imageSource from "image-source";
import firebase from "nativescript-plugin-firebase";

export default {
  data() {
    return {
      drawWidth: 5,
      drawColor: "#3489db",
      drawOpacity: 0,
      maxOpacity: 0,
      airbrushFlow: 0.7,
      paintingImage: ""
    };
  },

  methods: {
    open() {
      //not working yet
      this.open("left");
    },

    getMyPainting() {
      this.$refs.paintPad.nativeView.getPainting().then(img => {
        this.paintingImage = img;
      });
    },

    clearMyPainting() {
      this.$refs.paintPad.nativeView.clearPainting();
      this.paintingImage = null;
    },

    selectAirBrush() {
      this.$refs.paintPad.nativeView.setToolType(1);
    },

    selectPaintBrush() {
      this.$refs.paintPad.nativeView.setToolType(0);
    },

    widthChange(event) {
      this.drawWidth = event.value;
    },

    opacityChange(event) {
      this.drawOpacity = event.value;
    },

    airbrushFlowChange(event) {
      this.airbrushFlow = event.value;
    },

    pickColor() {
      this._colorPicker
        .show("#3489db", "HEX")
        .then(result => {
          this.drawColor = result;
        })
        .catch(err => {
          console.log(err);
        });
    },

    documentsPath(filename) {
      return fs.knownFolders.documents().path + "/" + filename;
    },

    getFilename(path) {
      let parts = path.split("/");
      return parts[parts.length - 1];
    },

    uploadFile(localPath) {
      let filename = this.getFilename(localPath);
      let remotePath = `${filename}`;
      return firebase.storage.uploadFile({
        remoteFullPath: remotePath,
        localFullPath: localPath
      });
    },

    getDownloadUrl(remoteFilePath) {
      return firebase.storage
        .getDownloadUrl({
          remoteFullPath: remoteFilePath
        })
        .then(
          function(url) {
            return url;
          },
          function(errorMessage) {
            return errorMessage;
          }
        );
    },

    upload() {
      let imgsrc = imageSource.fromAsset(this.paintingImage);
      let filename = "drawing-" + Date.now() + ".png";
      let localPath = this.documentsPath(filename);
      this.paintingImage.saveToFile(localPath, "png");
      this.uploadFile(localPath).then(
        uploadedFile => {
          console.log("uploaded file ", uploadedFile);
          this.getDownloadUrl(uploadedFile.name).then(downloadUrl => {
            if (downloadUrl) {
              this.$store.dispatch("addToDb",downloadUrl);
              this.paintingImage = "";
              this.clearMyPainting();
            }
          });
        },
        error => {
          alert("File upload error: " + error);
        }
      );
    },
    addToDb(url) {
      return firebase
        .push("/Mandalas", {
          image: url,
          date: 0 - Date.now()
        })
        .then(function(result) {
          console.log("created key: " + result.key);
          alert("Drawing uploaded! Peace!");
        });
    }
  },
  created() {
    if (platformModule.isIOS) {
      this.drawOpacity = 1;
      this.maxOpacity = 1;
    } else {
      this.drawOpacity = 255;
      this.maxOpacity = 255;
    }
    this._colorPicker = new ColorPicker();
  }
};
</script>