const suxIconFiles = new Map();
export const requestIcon = (url) => {
  if (suxIconFiles.has(url)) {
    return suxIconFiles.get(url);
  }
  else {
    const request = fetch(url).then(async (response) => {
      // Checking The condition durring requestig ICON if Icon available or not in the Library
      if (response.ok) {
        const div = document.createElement('div');
        div.innerHTML = await response.text();
        const svg = div.firstElementChild;
        return {
          ok: response.ok,
          status: response.status,
          svg: svg && svg.tagName.toLowerCase() === 'svg' ? svg.outerHTML : '',
        };
      }
      else {
        return {
          ok: response.ok,
          status: response.status,
          svg: null,
        };
      }
    });
    suxIconFiles.set(url, request);
    return request;
  }
};
