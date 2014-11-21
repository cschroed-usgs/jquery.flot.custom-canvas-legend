/* global $ document describe beforeEach afterEach expect it Math*/
$(document).ready(function () {
    "use strict";
    describe('view all built-in functionality', function () {

        var customCanvasLegend, plugin, pluginName = 'canvasLegend';
        //get a reference to the plugin's private methods
        $.each($.plot.plugins, function(index,plugin){
            if (pluginName === plugin.name) {
                customCanvasLegend = plugin;
                return false;//break
            }
        });
        var pluginMethods = customCanvasLegend._private_methods;

        var legendContainer, plotContainer, series, options;
        var setupDom = function () {
            plotContainer = $('<div></div>').css({
                'height': '300px',
                'width': '500px',
                'display': 'inline-block'
            });

            legendContainer = $('<canvas/>').css({
                'display': 'inline'
            }).attr({
                'height': '300',
                'width': '500'
            });
            $('body').append('<h2>' + this.description + '</h2>');
            $('body').append(plotContainer);
            $('body').append(legendContainer);
            var d1 = [];
            for (var i = 0; i < 14; i += 0.5) {
                d1.push([i, Math.sin(i)]);
            }

            var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

            // A null signifies separate line segments

            var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];
            series = [{label: 'd1', data: d1}, {label: 'data series 2', data: d2}, {label: 'dataaaaaaaaaaaaaaa3', data: d3}];
        };
        beforeEach(setupDom);
        it('external canvas vertical box left label right', function () {
            options = {
                legend: {
                    show: false
                },
                canvasLegend: {
                    show: true,
                    entrySize: $.plot.canvasLegend.renderersAndSizers.boxLeftLabelRight.size,
                    entryRender: $.plot.canvasLegend.renderersAndSizers.boxLeftLabelRight.render,
                    container: legendContainer,
                    layout: $.plot.canvasLegend.layouts.vertical
                }
            };
            var plot = $.plot(plotContainer, series, options);
        });
        it('external canvas horizontal box left label right', function () {
            options = {
                legend: {
                    show: false
                },
                canvasLegend: {
                    show: true,
                    entrySize: $.plot.canvasLegend.renderersAndSizers.boxLeftLabelRight.size,
                    entryRender: $.plot.canvasLegend.renderersAndSizers.boxLeftLabelRight.render,
                    container: legendContainer,
                    layout: $.plot.canvasLegend.layouts.horizontal
                }
            };
            var plot = $.plot(plotContainer, series, options);
        });
        it('horizontal box left label right', function () {
            options = {
                legend: {
                    show: false
                },
                canvasLegend: {
                    show: true,
                    entrySize: $.plot.canvasLegend.renderersAndSizers.boxLeftLabelRight.size,
                    entryRender: $.plot.canvasLegend.renderersAndSizers.boxLeftLabelRight.render,
                    position: 'ne',
                    layout: $.plot.canvasLegend.layouts.horizontal
                }
            };
            var plot = $.plot(plotContainer, series, options);
        });
        
    });//root describe block
});//document ready