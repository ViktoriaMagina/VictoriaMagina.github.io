"use strict";function autoHeight(){for(var e,o=document.querySelectorAll(".compare-page-num"),t=0,i=1;i<o.length+1;i++){e=document.querySelectorAll(".compare-item-".concat(i));for(var r=0;r<e.length;r++){var s=e[r].offsetHeight;t<s&&(t=s),e.forEach(function(e){e.style.height=t+"px"}),t=0}}}$(document).ready(function(){$(".compare-page__slider").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,infinity:!1,responsive:[{breakpoint:1400,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}),autoHeight();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmUuanMiXSwibmFtZXMiOlsiaXRlbU51bSIsImhlaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJpdGVtTGluZSIsImNvbmNhdCIsImoiLCJsZW5ndGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwiJCIsInJlYWR5Iiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImluZmluaXR5IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImF1dG9IZWlnaHQiXSwibWFwcGluZ3MiOiJhQTJCRSxTQUFJQSxhQUdGQSxJQUZGLElBRElBLEVBQ0FDLEVBQUpDLFNBQUFDLGlCQUFBLHFCQUNBRixFQUFhLEVBQ0pHLEVBQUdGLEVBQUFBLEVBQVFHLEVBQUNGLE9BQVQsRUFBQUMsSUFBQSxDQUFWSixFQUFVRSxTQUFTQyxpQkFBVCxpQkFBQUcsT0FBMkNGLElBQ3JELElBQUssSUFBSUcsRUFBSSxFQUFHQSxFQUFJUCxFQUFRUSxPQUFRRCxJQUFLLENBQ3ZDLElBQUlFLEVBQVlULEVBQVFPLEdBQUdHLGFBQ3ZCVCxFQUFTUSxJQUFiUixFQUFVUSxHQUVUVCxFQUFBVyxRQUFBLFNBQUFDLEdBRUNBLEVBQUtDLE1BQU1aLE9BQVNBLEVBQVMsT0FBN0JXLEVBQUtDLElBckNiQyxFQUFFWixVQUFVYSxNQUFNLFdBQWhCYixFQUFBQSx5QkFBMEJjLE1BQUEsQ0FDMUJDLGFBQUEsRUFDSUMsZUFBQSxFQUNBRCxRQUFBQSxFQUNBQyxVQUFBQSxFQUNBQyxXQUgrQixDQUkvQkMsQ0FDQUMsV0FDSSxLQUNFQyxTQURGLENBRVVMLGFBQUUsSUFJWixDQUNFSyxXQURGLElBRUVDLFNBQVUsQ0FDUk4sYUFBYyxTQXdCekJPIiwiZmlsZSI6ImNvbXBhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIC8vY29tcGFyZSBzbGlkZXJcclxuICAgICQoJy5jb21wYXJlLXBhZ2VfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgaW5maW5pdHk6IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0MDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vYXV0b21hdGljIGhlaWdodFxyXG5mdW5jdGlvbiBhdXRvSGVpZ2h0KCl7XHJcbiAgY29uc3QgaXRlbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGFyZS1wYWdlLW51bScpO1xyXG4gIGxldCBpdGVtTnVtO1xyXG4gIGxldCBoZWlnaHQgPSAwO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgaXRlbUxpbmUubGVuZ3RoICsgMTsgaSsrKSB7XHJcbiAgICBpdGVtTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbXBhcmUtaXRlbS0ke2l9YCk7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1OdW0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgbGV0IGdldEhlaWdodCA9IGl0ZW1OdW1bal0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBpZiAoaGVpZ2h0IDwgZ2V0SGVpZ2h0KXtcclxuICAgICAgICBoZWlnaHQgPSBnZXRIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaXRlbU51bS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgICB9KVxyXG4gICAgICBoZWlnaHQgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5hdXRvSGVpZ2h0KClcclxuIl19
