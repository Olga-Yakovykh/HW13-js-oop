class Timer  {
    constructor(h,m,s) {
      this.h = h;
      this.m = m;
      this.s = s;
    }

    render() {
      let now = new Date();
      let div = document.querySelector('div');
      this.h = now.getHours().toString();
      this.m = now.getMinutes().toString();
      this.s = now.getSeconds().toString();

      if (this.h.length < 2) {
        this.h = '0' + this.h;
      }
      if (this.m.length < 2) {
        this.m = '0' + this.m;
      }
      if (this.s.length < 2) {
        this.s = '0' + this.s;
      }
      if (div.classList.contains('hidden')) {
        div.innerHTML = this.h + ':' + this.m;
      } else {
        div.innerHTML = this.h + ':' + this.m + ':' + this.s;
      }

      div.addEventListener('click', (event) => {
        event.target.classList.toggle('hidden');
      }); 
    }
}

let clockNow = new Timer;

setInterval(() => {
  clockNow.render(); 
}, 100);
  
