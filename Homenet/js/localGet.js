(()=>{var e=localStorage.getItem("keyApplication"),t=document.querySelectorAll(".data-item");t.length>0&&t.forEach((function(t){t.getAttribute("data-item")==e&&(t.checked=!0,localStorage.removeItem("keyApplication"))}))})();