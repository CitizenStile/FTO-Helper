/*
 * FTO - Render
 * 
 */

var FTO.Render.Footer = "";

FTO.Render.CreateFooter = function() {
    FTO.Render.Footer = document.createElement('div');
    FTO.Render.Footer.id = 'CMBotBar';
	FTO.Render.Footer.style.height = '55px';
	FTO.Render.Footer.style.width = '100%';
	FTO.Render.Footer.style.position = 'absolute';
	FTO.Render.Footer.style.display = 'none';
	FTO.Render.Footer.style.backgroundColor = '#262224';
	FTO.Render.Footer.style.backgroundImage = '-moz-linear-gradient(top, #4d4548, #000000)';
	FTO.Render.Footer.style.backgroundImage = '-o-linear-gradient(top, #4d4548, #000000)';
	FTO.Render.Footer.style.backgroundImage = '-webkit-linear-gradient(top, #4d4548, #000000)';
	FTO.Render.Footer.style.backgroundImage = 'linear-gradient(to bottom, #4d4548, #000000)';
	FTO.Render.Footer.style.borderTop = '1px solid black';
	FTO.Render.Footer.style.overflow = 'auto';
	FTO.Render.Footer.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
	
	var table = document.createElement('table');
	table.style.width = '100%';
	table.style.textAlign = 'center';
	table.style.whiteSpace = 'nowrap';
	var tbody = document.createElement('tbody');
	table.appendChild(tbody);
	
	var firstCol = function(text, color) {
		var td = document.createElement('td');
		td.style.textAlign = 'right';
		td.className = CM.Disp.colorTextPre + color;
		td.textContent = text;
		return td;
	}
	
	var type = document.createElement('tr');
	type.style.fontWeight = 'bold';
	type.appendChild(firstCol(CM.VersionMajor + '.' + CM.VersionMinor, CM.Disp.colorYellow));
	tbody.appendChild(type);
	var bonus = document.createElement('tr');
	bonus.appendChild(firstCol('Bonus Income', CM.Disp.colorBlue));
	tbody.appendChild(bonus);
	var pp = document.createElement('tr');
	pp.appendChild(firstCol('Payback Period', CM.Disp.colorBlue));
	tbody.appendChild(pp);
	var time = document.createElement('tr');
	time.appendChild(firstCol('Time Left', CM.Disp.colorBlue));
	tbody.appendChild(time);
	
	for (var i in Game.Objects) {
		var header = document.createElement('td');
		header.appendChild(document.createTextNode((i.indexOf(' ') != -1 ? i.substring(0, i.indexOf(' ')) : i) + ' ('));
		var span = document.createElement('span');
		span.className = CM.Disp.colorTextPre + CM.Disp.colorBlue;
		header.appendChild(span);
		header.appendChild(document.createTextNode(')'));
		type.appendChild(header);
		bonus.appendChild(document.createElement('td'));
		pp.appendChild(document.createElement('td'));
		time.appendChild(document.createElement('td'));
	
	}
	
	CM.Disp.BotBar.appendChild(table);
	
	l('wrapper').appendChild(CM.Disp.BotBar);
}