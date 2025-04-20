function runCode() {
    const code = document.getElementById("code").value;
    document.getElementById("output").innerHTML = code;
  }  
document.querySelectorAll('code').forEach((block) => {
    block.innerHTML = block.innerHTML.replace(/(&lt;[^&]+&gt;)/g, '<span class="green">$1</span>');
  });