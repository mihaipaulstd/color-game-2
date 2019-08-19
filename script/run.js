function run() {
    fetch('http://color-names.herokuapp.com/v1/')
        .then(res => res.json())
        .then(obj => obj.colors)
        .then(colors => {
            colors.forEach(color => {
                global.variables.colors.push(color);
            });
            global.functions.init.setScreen();
            global.functions.main.setListener();
        });
        
        



}