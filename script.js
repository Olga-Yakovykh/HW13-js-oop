class Timer  {
    constructor(h, m, s) {
      this.h = h;
      this.m = m;
      this.s = s;
      this.div = document.querySelector('div'); 
    }
    render() {
      let now = new Date();
      let h = now.getHours().toString();
      let m = now.getMinutes().toString();
      let s = now.getSeconds().toString();

      if (h < 10) {
        h = '0' + h;
      }
      if (m < 10) {
        m = '0' + m;
      }
      if (s < 10) {
        s = '0' + s;
      }
      if (this.div.classList.contains('hidden')) {
        this.div.innerHTML = h + ':' + m;
      } else {
        this.div.innerHTML = h + ':' + m + ':' + s;
      } 
    }
    shotLong() {
      this.div.addEventListener('click', (event) => {
      event.target.classList.toggle('hidden'); 
      }); 
    }
}

let clockNow = new Timer('h','m','s');
setInterval(() => {
  clockNow.render(); 
}, 100);
clockNow.shotLong();  


