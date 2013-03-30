/**
        JavaScript Timeline Library

        @created: 15/10/2012
        @author: Edson Mattos - edsonmattos@gmail.com
        @version: 1.0
        @url: http://code.google.com/p/js-timeline-lib/


        Draw a chart showing periods as a timeline in your browser using JavaScript.
*/

function Timeline(periods) {    
        /** */
        function renderYearColumns() {
                for (var currentYear = minYear; currentYear != (maxYear+1); currentYear++) {
                        var divAnoContainer = document.createElement('div');
                        divAnoContainer.setAttribute('id', 'anoContainer');
                        divAnoContainer.setAttribute('class', 'anoContainer');

                        var divAnoLine = document.createElement('div');
                        divAnoLine.setAttribute('id', 'anoLine');
                        divAnoLine.setAttribute('class', 'anoLine');
                        divAnoLine.setAttribute('style', ('height: '+ columnHeight +'px'));

                        var divAnoText = document.createElement('div');
                        divAnoText.setAttribute('id', 'anoText');
                        divAnoText.setAttribute('class', 'anoText');
                        divAnoText.innerHTML = currentYear;

                        divAnoContainer.appendChild(divAnoLine);
                        divAnoContainer.appendChild(divAnoText);
                        divX.appendChild(divAnoContainer);
                }
        }

        /** */
        function renderPeriods() {
                for (var currentPeriod = 0; currentPeriod != periods.length; currentPeriod++) {
                        var startDate = (periods[currentPeriod][0]).split('/');
                        var endDate = (periods[currentPeriod][1]).split('/');

                        var leftPos = ((parseInt(startDate[2]) - minYear) * constants.TOTAL_DAYS);
                        leftPos += ((parseInt(startDate[1], 10) - 1) * constants.TOTAL_MONTH_DAYS);
                        leftPos += parseInt(startDate[0], 10) + 1;

                        var size = ((parseInt(endDate[2]) - minYear) * constants.TOTAL_DAYS);
                        size += ((parseInt(endDate[1], 10) - 1) * constants.TOTAL_MONTH_DAYS);
                        size += (parseInt(endDate[0], 10) + 1) - leftPos;

                        var divPeriod = document.createElement('div');

                        divPeriod.style.top = ((currentPeriod - 1) * 5) +"px";
                        divPeriod.style.left =  leftPos +"px";
                        divPeriod.style.width =  size +"px";
                        divPeriod.style.height = "25px";
                        divPeriod.style.position = "relative";
                        divPeriod.style.backgroundColor = "#84bb36";

                        divY.appendChild(divPeriod);
                }
        }

        /** */
        function sortingPeriod(a, b) {
                var year01 = parseInt(a[1].split('/')[2]);
                var year02 = parseInt(b[1].split('/')[2]);

                return ((Math.max(year01, year02) == year01) ? 1 : -1);
        }

        /** main */
        var constants = { TOTAL_DAYS: 365, TOTAL_MONTH_DAYS: 30, MONTHS: 12 };
        var columnHeight = (periods.length * 30);

        periods.sort(sortingPeriod);

        var divX = document.createElement('div');
        divX.setAttribute('id', 'axisX');
        divX.setAttribute('style', 'position: absolute;');

        var divY = document.createElement('div');
        divY.setAttribute('id', 'axisY');
        divY.setAttribute('style', 'position: absolute;');

        var divMainCanvas = document.getElementById('mainCanvas');
        divMainCanvas.style.height = (columnHeight + 50) +"px";
        divMainCanvas.appendChild(divX);
        divMainCanvas.appendChild(divY);

        var minYear = parseInt(periods[0][0].split('/')[2]);
        var maxYear = parseInt(periods[periods.length - 1][1].split('/')[2]);

        Timeline.prototype.render = function() {
                renderYearColumns();
                renderPeriods();
        }
}