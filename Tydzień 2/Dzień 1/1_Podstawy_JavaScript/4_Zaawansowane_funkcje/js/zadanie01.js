/**
 * Zagnie�d�anie funkcji.
 * Prze�led� krok po kroku ka�d� linijk� kodu. Ka�d�!
 * Spr�buj napisa� komentarze dla ka�dej z linijek kodu
 */


//Deklarowanie funkcji "jeden()"
function jeden() {

    //Deklarowanie zmiennej "zmienna1", ktora jest zmienna lokalna funkcji "jeden()"
    var zmienna1 = 1;

    //Deklarowanie funkcji "dwa()" zagniezdzonej w funkcji "jeden()"
    function dwa() {

        //Wyświedlanie "zmienna1" ktora jest zadeklarowana w funkcji "jeden()" i wyswietla ja poniewaz zadeklarowana "zmienna1" zachowuje sie w tym przypadku jak funkcja globalna dla funkcji "dwa()".
        console.log(zmienna1);

        // Definiowana "zmienna2" jest funkcja lokalna funkcji "dwa()". funkcja "jeden()" nie ma do niej dostępu.
        var zmienna2 = 3;
    }

    //Wywoływanie funkcji "dwa()" zagniezdzonej w funkcji "jeden()"
    dwa();
    //Funkcja jeden nie ma dostępu do tej "zmienna2" poniewaz "zmienna2" jest zagniezdzona nizej w funkcji "dwa()". "zmienna2" nie zostanie wyswietlona.
    console.log(zmienna2)
}

//Wywolywanie funkcji "jeden()"
jeden()
