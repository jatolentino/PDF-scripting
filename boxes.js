for (var p=0; p<this.numPages; p++) {
    
    var Recta = this.addAnnot({type: "Square", page: p, rect: [-1,787,596.5,843], width:2, strokeColor: color.white, opacity: 1, readOnly: true});
    Recta.fillColor = color.white;
		var Recta1 = this.addAnnot({type: "Square", page: p, rect: [-1,0,596.5,18.5], width:2, strokeColor: color.white, opacity: 1, readOnly: true});
    Recta1.fillColor = color.white;
    var Recta2 = this.addAnnot({type: "Square", page: p, rect: [-1,0,30,843], width:2, strokeColor: color.white, opacity: 1, readOnly: true});
    Recta2.fillColor = color.white;
    var Recta3 = this.addAnnot({type: "Square", page: p, rect: [543,0,596.5,843], width:2, strokeColor: color.white, opacity: 1, readOnly: true});
    Recta3.fillColor = color.white;
}

