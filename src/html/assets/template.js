async function template(){
  $http = axios;
  // alert('template')
  
  // const {data} = await $http('./assets/side-bar.html');
  // const sideBar =  document.createElement('DIV');
  // sideBar.innerHTML = data;

  // var templateData = await $http('./index.html');
  // var template = document.createDocumentFragment();

  // document.documentElement.innerHTML = templateData.data;
  // document.getElementById('content').replaceWith(component);
  
  const ikanCSS = document.createElement('LINK');
  ikanCSS.href = '../../dist/css/ikan.css';
  document.getElementsByTagName( "head" )[0].appendChild(ikanCSS);
  const component = document.getElementById('component');
  document.title = `ikan || ${component.dataset.componentName.toUpperCase()}`;



  // const main = document.getElementById('main');
  // const mainParent = main.parentNode;
  // mainParent.insertBefore(sideBar,main);

  console.log(component);
}

template();
