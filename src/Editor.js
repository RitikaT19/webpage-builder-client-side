import React, {useEffect, useState} from 'react';
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import "grapesjs/dist/css/grapes.min.css";
import { useParams } from "react-router-dom";
import "./style/web-builder.scss";
import {API_HOST  } from "./api_utils/index"


export const Editor = ()=>{
    const [editor, setEditor] = useState(null);
    let {pageId} = useParams();
    console.log("page : >>",pageId)

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      // height: '300px',
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {},
      },
    //   storageManager: {
    //     id: 'IA-',             // Prefix identifier that will be used inside storing and loading
    //     type: 'remote',          // Type of the storage
    //     autosave: true,         // Store data automatically
    //     autoload: true,         // Autoload stored data on init
    //     stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
    //     storeComponents: true,  // Enable/Disable storing of components in JSON format
    //     storeStyles: true,      // Enable/Disable storing of rules in JSON format
    //     storeHtml: true,        // Enable/Disable storing of components as HTML string
    //     storeCss: true,         // Enable/Disable storing of rules as CSS string
    //   }

    storageManager: {
        type: "remote",
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,
        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        headers: {
          "Content-Type": "application/json",
        },
        id: "mycustom-",
        urlStore: `${API_HOST}/${pageId}/content`,
        urlLoad: `${API_HOST}/${pageId}/content`,
      },
    });
    setEditor(editor);
  }, []);
 
    return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
    }