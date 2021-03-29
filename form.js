for (var p=0; p<this.numPages; p++) {
    
    var Recta = this.addAnnot({type: "Square", page: p, rect: [29,48,567,80], width:2, strokeColor: color.white, opacity: 1, readOnly: true});
    var Recta1 = this.addAnnot({type: "Square", page: p, rect: [29,48,467,80], width:2, strokeColor: color.white, opacity: 1, readOnly: true});
    Recta1.fillColor = color.white;
    
    var Recta2 = this.addAnnot({type: "Square", page: p, rect: [467,65,490,80], width:2, strokeColor: color.white, opacity: 1, readOnly: true});
    Recta2.fillColor = color.white;
  
    // Command to get the size of the page i.e. 3
    //this.getPageBox("Crop", 3)
}
