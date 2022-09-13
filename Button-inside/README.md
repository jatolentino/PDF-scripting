## Adding navigation buttons

### Code in JS

    ```js
    var aPage = this.getPageBox();
    var w = 45; // Width of each button
    var h = 12 // Height of each button
    var nNavi = 4; // Number of buttons to be placed
    var g = 6; // Gap between buttons
    var totalWidth = nNavi * w + (nNavi - 1) * g; // total width of navi bar

    var widthPage = aPage[2] - aPage[0];
    // Horizontal offset to center navi bar
    var hoffset = (widthPage - totalWidth) / 2;
    var voffset = 12; // vertical offset from bottom

    for (var nPage = 0; nPage < this.numPages; nPage++) {
        // Create the fields
        var pp = this.addField("PrevPage", "button", nPage,[ hoffset, voffset, hoffset + w, voffset + h ] );
        pp.buttonSetCaption(pp.name);
        pp.fillColor=color.ltGray;
        pp.setAction("MouseUp", "this.pageNum--");


        var np = this.addField("NextPage", "button", nPage, [ hoffset + w + g, voffset, hoffset + 2*w + g, voffset + h ] );
        np.buttonSetCaption(np.name);
        np.fillColor=color.ltGray;
        np.setAction("MouseUp", "this.pageNum++");
        var pv = this.addField("PrevView", "button", nPage, [ hoffset + 2*w + 2*g, voffset, hoffset + 3*w + 2*g, voffset + h ] );

        pv.buttonSetCaption(pv.name);
        pv.fillColor=color.ltGray;
        pv.setAction("MouseUp", "app.goBack()");
        var nv = this.addField("NextView", "button", nPage, [ hoffset + 3*w + 3*g, voffset, hoffset + 4*w + 3*g, voffset + h ] );
    }
    ```
    
<p align="center">
    <img src="https://github.com/jatolentino/PDF-scripting/blob/master/Button-inside/Lorem%20ipsum.png" width="600">
</p>
