import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import VideoEditing from "./video/videoediting";
import '../theme/video.css';
import AutoMediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembedui';


export default class Video extends Plugin {
    static get requires() {
        return [ VideoEditing, Widget];
    }

    static get pluginName() {
        return 'Video';
    }
}
