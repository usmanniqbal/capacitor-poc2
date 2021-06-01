import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Plugins } from "@capacitor/core";
const { App: CapApp } = Plugins;

const AppUrlListener = () => {
  console.log("Native: Into AppUrlListener");
  let history = useHistory();
  useEffect(() => {
    console.log("Native: Into useEffect");
    CapApp.addListener("appUrlOpen", (data) => {
      console.log(`Native: Into appUrlOpen ${data.url}`);
      const slug = data.url.split(".io").pop();
      if (slug) {
        console.log(`Native: Into appUrlOpen: pushing ${slug}`);
        history.push(slug);
      }
    });

    console.log(`Registering appStateChange`);
    CapApp.addListener("appStateChange", (state) => {
      console.log(`In appStateChange`);
    });
  }, []);

  return null;
};

export default AppUrlListener;
