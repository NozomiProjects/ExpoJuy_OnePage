window.addEventListener('load', () => {
    let lon = -65.33126577370167;
    let lat = -24.183338857971727;
    fecha = new Date(); 
    hora = fecha.getHours();
    console.log(hora)
  
    let tempvalor = document.getElementById('temp-valor')
    let tempdesc = document.getElementById('temp-desc')
  
    let ubic = document.getElementById('ubicacion')
    let iconanim = document.getElementById('icono-anim')
  
    let viento = document.getElementById('viento')
  
  
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-24.183338857971727&lon=-65.33126577370167&appid=90be853f34f9e301e44ae601d084f2af&units=metric&lang=sp'
  
    fetch(url)
      .then(response => { return response.json() })
      .then(data => {      
  
        let temp = Math.round(data.main.temp)
        tempvalor.textContent = `${temp} °C`
  
        let desc = data.weather[0].description
        tempdesc.textContent = desc.toUpperCase()
  
        ubic.textContent = `Centro Cultural`
  
        viento.textContent = `${data.wind.speed} m/s`
  
        if(hora >= 7 && hora < 19){
          switch (data.weather[0].main) {
            case 'Thunderstorm':
              iconanim.src = 'assets/animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconanim.src = 'assets/animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Rain':
              iconanim.src = 'assets/animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconanim.src = 'assets/animated/snowy-6.svg'
              console.log('NIEVE');
              break;
            case 'Clear':
              iconanim.src = 'assets/animated/day.svg'
              console.log('LIMPIO');
              break;
            case 'Atmosphere':
              iconanim.src = 'assets/animated/weather.svg'
              console.log('ATMOSFERA');
              break;
            case 'Clouds':
              iconanim.src = 'assets/animated/cloudy-day-1.svg'
              console.log('NUBES');
              break;
            default:
              iconanim.src = 'assets/animated/cloudy-day-1.svg'
              console.log('por defecto');
          }
        }
        else{
          switch (data.weather[0].main) {
            case 'Thunderstorm':
              iconanim.src = 'assets/animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconanim.src = 'assets/animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Rain':
              iconanim.src = 'assets/animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconanim.src = 'assets/animated/snowy-6.svg'
              console.log('NIEVE');
              break;
            case 'Clear':
              iconanim.src = 'assets/animated/night.svg'
              console.log('LIMPIO');
              break;
            case 'Atmosphere':
              iconanim.src = 'assets/animated/weather.svg'
              console.log('ATMOSFERA');
              break;
            case 'Clouds':
              iconanim.src = 'assets/animated/cloudy-day-1.svg'
              console.log('NUBES');
              break;
            default:
              iconanim.src = 'assets/animated/cloudy-day-1.svg'
              console.log('por defecto');
          }
        }
  
        console.log(hora)
        
      })
      .catch(error => {
        console.log(error)
      })
  })