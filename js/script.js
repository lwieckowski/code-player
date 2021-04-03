$("textarea").keyup(function() {
    const codeHTML = $("#codeHTML textarea").val();
    const codeCSS = "\n<style>\n" + $("#codeCSS textarea").val()
	+ "\n</style>\n";
    const codeJS = "\n<script type='text/javascript'>\n"
	+ $("#codeJS textarea").val() + "\n</" + "script>\n";

    const code = codeCSS + codeHTML + codeJS;
    const src = 'data:text/html;charset=utf-8,' + encodeURIComponent(code);
    $("#output").attr("src", src);
});

function setColumnWidth() {
    const numberColumns = $(".container .column:visible").length;
    const columnWidth = "calc(" + (100/numberColumns) + "%" + " - 1px)";
    $(".column").width(columnWidth);
};

$("button").click(function() {
    $(this).toggleClass("buttonActive");
    let buttonClicked = $(this).attr("id");

    switch (buttonClicked) {
	case "buttonHTML": {
	    $("#codeHTML").toggle();
	    break;
	}
	case "buttonCSS": {
	    $("#codeCSS").toggle();
	    break;
	}
	case "buttonJS": {
	    $("#codeJS").toggle();
	    break;
	}
	case "buttonOutput": {
	    $("#output").toggle();
	    break;
	}
    }

    setColumnWidth();

    const anyColumnVisible = $(".container .column:visible").length != 0
    if(anyColumnVisible){
	$("#landing-text").hide();
    } else {
	$("#landing-text").show();
    }
});
