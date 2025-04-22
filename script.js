// change te text content
document.getElementById('change-text-btn').addEventListener('click', function() {
    const description = document.getElementById('description');
    description.textContent = "You clicked the button";
    description.style.color = "green";
    description.style.fontWeight = 'bold';
});

//Add or Remove an element
document.getElementById('toggle-box-btn').addEventListener('click', function(){
    const container = document.getElementById('box-container');
    const existingBox = document.getElementById('magic-box');

    if (existingBox){
        container.removeChild(existingBox);
    }else{
        const newBox = document.createElement('div');
        newBox.id = 'magic-box';
        newBox.textContent = "I appear magically";
        newBox.style.padding = '20px';
        newBox.style.backgroundColor = '#f0ad4e';
        newBox.style.marginTop = '10px';
        container.appendChild(newBox)}

});
