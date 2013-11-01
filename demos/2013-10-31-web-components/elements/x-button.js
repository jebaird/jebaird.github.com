(function(){
   var proto = Object.create(HTMLButtonElement.prototype)


proto.enteredViewCallback = function(){
    console.log("enteredViewCallback", this)
}

proto.createdCallback = function(){
    
    this.classList.add("ui-widget-content")
    this.classList.add("ui-corner-all")
    this.classList.add("x-button")
    
   
    
    var primaryIcon = this.getAttribute('data-icon-primary');
    if( primaryIcon ){
        var icon = document.createElement("span")
        icon.classList.add("ui-icon")
        icon.classList.add(primaryIcon)
        this.appendChild(icon)
    }
    
    this.addEventListener('mouseover', function(e) {
        this.classList.add("ui-state-hover")
    });
    
    this.addEventListener('focus', function(e) {
        this.classList.add("ui-state-focus")
    });
    this.addEventListener('blur', function(e) {
        this.classList.remove("ui-state-focus")
    });
    this.addEventListener('mouseout', function(e) {
        this.classList.remove("ui-state-hover")
    });
}


document.webkitRegister('x-button',{
  prototype: proto
}) 
})()
