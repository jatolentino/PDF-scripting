var delePage = function(doc) {
 
    // Delete the current page
    try {
        doc.deletePages(doc.pageNum);
    } catch(e) {
        app.alert("Could not delete page, probably because the document is secured.", 3);
    }
};
 
app.addToolButton(
    {
    cName: "DelePage",
    cLabel: "Delete Page",

);


    
