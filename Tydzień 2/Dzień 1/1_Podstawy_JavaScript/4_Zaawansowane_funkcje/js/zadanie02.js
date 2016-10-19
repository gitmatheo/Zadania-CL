/**
 * Funkcje wy�szego rz�du.
 * Prze�led� krok po kroku ka�d� linijk� kodu. Ka�d�!
 * Spr�buj napisa� komentarze dla ka�dej z linijek kodu
 */

//Deklarowanie funkcji "sortArray()"
function sortArray() {

    //Deklarowanie zmiennej "points" w ktorej jest zawarta 7 elementowa tablica zawierajaca same liczby.
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywolywanie funkcji "sort()" na zmiennej "points". Jako argument podana zostala funkcja ktora przyjmuje dwa argumenty "a i b".
    points.sort(function(a, b){
        //Funkcja anonimowa ktora jest argumentem funkcji "sort()" wyrzuca nam roznice przyjetych argumentow "a i b"
        return a-b;
    });

    //Zwracanie posortowanej tablicy "points"
    return points;
}

//Wywolywanie funkcji "sortArray()"
sortArray();
