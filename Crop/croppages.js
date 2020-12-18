for (var p=0; p<this.numPages; p++) {
    
  var rCrop = this.getPageBox("Crop",p); 
  rCrop[0] += 70; // Adjust Left Side 85
  rCrop[1] -= 50; // Adjust Top Side 69
  rCrop[2] -= 200; // Adjust Right Side 224 
  rCrop[3] += 50; // Adjust Bottom Side 70
  this.setPageBoxes("Crop",p,p,rCrop);
    
}
