    // assign function to onclick property of checkbox
    document.getElementById('activeMand').onclick = function () {
        // call toggleSub when checkbox clicked
        // toggleSub args: checkbox clicked on (this), id of element to show/hide
        toggleSub(this, 'active_sub_mand');
    };

    // called onclick of checkbox Sæt flueben ved din alder
    function toggleSub(box, id) {
        // get reference to related content to display/hide
        var el = document.getElementById(id);

        if (box.checked) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }

    //kvinder og cykler
    // assign function to onclick property of checkbox
    document.getElementById('activeKvinde').onclick = function () {
        // call toggleSub when checkbox clicked
        // toggleSub args: checkbox clicked on (this), id of element to show/hide
        toggleSub(this, 'active_sub_kvinde');
    };

    // called onclick of checkbox Sæt flueben ved din alder
    function toggleSub(box, id) {
        // get reference to related content to display/hide
        var el = document.getElementById(id);

        if (box.checked) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
    // obtain reference to checkboxes named cykel[]
    var cykel = document.forms['demoForm'].elements['cykel[]'];

    // number of checkboxes in group
    //alert( cykel.length ); // 4

    // value of 4th checkbox in node list
    //alert( cykel[3].value ); // swimming

    // using reference to cykel obtained above
    for (var i = 0, len = cykel.length; i < len; i++) {
        cykel[i].onclick = doSomething;


    }

    // access properties of checkbox clicked using 'this' keyword
    function doSomething() {
        if (this.checked) {
            // if checked ...
            //alert( this.value );
            document.getElementById(this.value).style.display = 'block';
        } else {


            document.getElementById(this.value).style.display = 'none';


        }
    }
//vis cykler

    function toggleVisibility(id) {
        var el = document.getElementById(id);

        if (el.style.display == "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }
