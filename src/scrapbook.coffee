scraps = []
$(document).ready ->
    $('button#submit').click -> 
        scrap = new Scrap (scraps.length + 1), $('#email').val(), $('#name').val(), $('#message').val(), $.now()
        $('#scraps tr:last').after("<tr id='scrap-row-#{scrap.scrapNo}'><td>#{scrap.scrapNo}</td><td>#{scrap.name}</td><td>#{scrap.email}</td><td>#{scrap.message}</td><td>#{moment(scrap.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</td></tr>")
        scraps.push scrap

    $('#search').keyup ->
        searchText = $('#search').val()
        for scrap, i in scraps
            if scrap.containsText(searchText)
                $('#scrap-row-' + (i + 1)).show()
            else
                $('#scrap-row-' + (i + 1)).hide()

class Scrap
    constructor: (@scrapNo, @email, @name, @message, @timestamp) ->

    containsText: (s)->
        return containsIgnoreCase(@scrapNo.toString(), s) or containsIgnoreCase(@email, s) or containsIgnoreCase(@name, s) or containsIgnoreCase(moment(@timestamp).format('MMMM Do YYYY'), s)

containsIgnoreCase = (string, substring)->
        if string?
            if substring? 
                string.toUpperCase().indexOf(substring.toUpperCase()) > -1
            else
                false
        else
            return !substring?
