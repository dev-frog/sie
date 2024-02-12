// Sample SIE data (replace this with actual SIE file data)
const sieData = `
#FLAGGA 0
#PROGRAM "Bokio" 1.0
#FORMAT PC8
#GEN 20230930
#SIETYP 4
#ORGNR 5590854179
#FNAMN "Workpine AB"
#RAR 0 20210701 20220630
#RAR -1 20200701 20210630
#RAR -2 20190701 20200630
#RAR -3 20180701 20190630
#RAR -4 20170701 20180630
#RAR -5 20161116 20170630
#KPTYP BAS2014
#KONTO 1010 "Utvecklingsutgifter"
#SRU 1010 7201
#KONTO 1011 "Balanserade utgifter f�r forskning och utveckling"
#SRU 1011 7201
#KONTO 1012 "Balanserade utgifter f�r programvaror"
#SRU 1012 7201
#KONTO 1018 "Ackumulerade nedskrivningar p� balanserade utgifter"
#SRU 1018 7201
#KONTO 1019 "Ackumulerade avskrivningar p� balanserade utgifter"
#SRU 1019 7201
#KONTO 1020 "Koncessioner m.m."
#SRU 1020 7201
#KONTO 1028 "Ackumulerade nedskrivningar p� koncessioner m.m."
#SRU 1028 7201
#KONTO 1029 "Ackumulerade avskrivningar p� koncessioner m.m."
#SRU 1029 7201
#KONTO 1030 "Patent"
#SRU 1030 7201
#KONTO 1038 "Ackumulerade nedskrivningar p� patent"
#SRU 1038 7201
#KONTO 1039 "Ackumulerade avskrivningar p� patent"
#SRU 1039 7201
#KONTO 1040 "Licenser"
#SRU 1040 7201
#KONTO 1048 "Ackumulerade nedskrivningar p� licenser"
#SRU 1048 7201
#KONTO 1049 "Ackumulerade avskrivningar p� licenser"
#SRU 1049 7201
#KONTO 1050 "Varum�rken"
#SRU 1050 7201
#KONTO 1058 "Ackumulerade nedskrivningar p� varum�rken"
#SRU 1058 7201
#KONTO 1059 "Ackumulerade avskrivningar p� varum�rken"
#SRU 1059 7201
#KONTO 1060 "Hyresr�tter, tomtr�tter och liknande"
#SRU 1060 7201
#KONTO 1068 "Ackumulerade nedskrivningar p� hyresr�tter, tomtr�tter och liknande"
#SRU 1068 7201
#KONTO 1069 "Ackumulerade avskrivningar p� hyresr�tter, tomtr�tter och liknande"
#SRU 1069 7201
#KONTO 1070 "Goodwill"
#SRU 1070 7201
#KONTO 1078 "Ackumulerade nedskrivningar p� goodwill"
#SRU 1078 7201
#KONTO 1079 "Ackumulerade avskrivningar p� goodwill"
#SRU 1079 7201
#KONTO 1080 "P�g�ende projekt och f�rskott f�r immateriella anl�ggningstillg�ngar"
#SRU 1080 7201
#KONTO 1081 "P�g�ende projekt f�r immateriella anl�ggningstillg�ngar"
#SRU 1081 7201
#KONTO 1088 "F�rskott f�r immateriella anl�ggningstillg�ngar"
#SRU 1088 7202
#KONTO 1110 "Byggnader"
#SRU 1110 7214
#KONTO 1111 "Byggnader p� egen mark"
#SRU 1111 7214
#KONTO 1112 "Byggnader p� annans mark"
#SRU 1112 7214
#KONTO 1118 "Ackumulerade nedskrivningar p� byggnader"
#SRU 1118 7214
#KONTO 1119 "Ackumulerade avskrivningar p� byggnader"
#SRU 1119 7214
#KONTO 1120 "F�rb�ttringsutgifter p� annans fastighet"
#SRU 1120 7216
#KONTO 1129 "Ackumulerade avskrivningar p� f�rb�ttringsutgifter p� annans fastighet"
#SRU 1129 7216
#KONTO 1130 "Mark"
#SRU 1130 7214
#KONTO 1140 "Tomter och obebyggda markomr�den"
#SRU 1140 7214
#KONTO 1150 "Markanl�ggningar"
#SRU 1150 7214
#KONTO 1158 "Ackumulerade nedskrivningar p� markanl�ggningar"
#SRU 1158 7214
#KONTO 1159 "Ackumulerade avskrivningar p� markanl�ggningar"
#SRU 1159 7214
#KONTO 1180 "P�g�ende nyanl�ggningar och f�rskott f�r byggnader och mark"
#SRU 1180 7217
#KONTO 1181 "P�g�ende ny-, till- och ombyggnad"
#SRU 1181 7217
#KONTO 1188 "F�rskott f�r byggnader och mark"
#SRU 1188 7217
#KONTO 1210 "Maskiner och andra tekniska anl�ggningar"
#SRU 1210 7215
#KONTO 1211 "Maskiner"
#SRU 1211 7215
#KONTO 1213 "Andra tekniska anl�ggningar"
#SRU 1213 7215
#KONTO 1218 "Ackumulerade nedskrivningar p� maskiner och andra tekniska anl�ggningar"
#SRU 1218 7215
#KONTO 1219 "Ackumulerade avskrivningar p� maskiner och andra tekniska anl�ggningar"
#SRU 1219 7215
#KONTO 1220 "Inventarier och verktyg"
#SRU 1220 7215
#KONTO 1221 "Inventarier"
#SRU 1221 7215
#KONTO 1222 "Byggnadsinventarier"
#SRU 1222 7215
#KONTO 1223 "Markinventarier"
#SRU 1223 7215
#KONTO 1225 "Verktyg"
#SRU 1225 7215
#KONTO 1228 "Ackumulerade nedskrivningar p� inventarier och verktyg"
#SRU 1228 7215
#KONTO 1229 "Ackumulerade avskrivningar p� inventarier och verktyg"
#SRU 1229 7215
#KONTO 1230 "Installationer"
#SRU 1230 7215
#KONTO 1231 "Installationer p� egen fastighet"
#SRU 1231 7215
#KONTO 1232 "Installationer p� annans fastig het"
#SRU 1232 7215
#KONTO 1238 "Ackumulerade nedskrivningar p� installationer"
#SRU 1238 7215
#KONTO 1239 "Ackumulerade avskrivningar p� installationer"
#SRU 1239 7215
#KONTO 1240 "Bilar och andra transportmedel"
#SRU 1240 7215
#KONTO 1241 "Personbilar"
#SRU 1241 7215
#KONTO 1242 "Lastbilar"
#SRU 1242 7215
#KONTO 1243 "Truckar"
#SRU 1243 7215
#KONTO 1244 "Arbetsmaskiner"
#SRU 1244 7215
#KONTO 1245 "Traktorer"
#SRU 1245 7215
#KONTO 1246 "Motorcyklar, mopeder och skotrar"
#SRU 1246 7215
#KONTO 1247 "B�tar, flygplan och helikoptrar"
#SRU 1247 7215
#KONTO 1248 "Ackumulerade nedskrivningar p� bilar och andra transportmedel"
#SRU 1248 7215
#KONTO 1249 "Ackumulerade avskrivningar p� bilar och andra transportmedel"
#SRU 1249 7215
#KONTO 1250 "Datorer"
#SRU 1250 7215
#KONTO 1251 "Datorer, f�retaget"
#SRU 1251 7215
#KONTO 1257 "Datorer, personal"
#SRU 1257 7215
#KONTO 1258 "Ackumulerade nedskrivningar p� datorer"
#SRU 1258 7215
#KONTO 1259 "Ackumulerade avskrivningar p� datorer"
#SRU 1259 7215
#KONTO 1260 "Leasade tillg�ngar"
#SRU 1260 7215
#KONTO 1269 "Ackumulerade avskrivningar p� leasade tillg�ngar"
#SRU 1269 7215
#KONTO 1280 "P�g�ende nyanl�ggningar och f�rskott f�r maskiner och inventarier"
#SRU 1280 7217
#KONTO 1281 "P�g�ende nyanl�ggningar, maskiner och inventarier"
#SRU 1281 7217
#KONTO 1288 "F�rskott f�r maskiner och inventarier"
#SRU 1288 7217
#KONTO 1290 "�vriga materiella anl�ggningstillg�ngar"
#SRU 1290 7215
#KONTO 1291 "Konst och liknande tillg�ngar"
#SRU 1291 7215
#KONTO 1292 "Djur som klassificeras som anl�ggningstillg�ng"
#SRU 1292 7215
#KONTO 1298 "Ackumulerade nedskrivningar p� �vriga materiella anl�ggningstillg�ngar"
#SRU 1298 7215
#KONTO 1299 "Ackumulerade avskrivningar p� �vriga materiella anl�ggningstillg�ngar"
#SRU 1299 7215
#KONTO 1310 "Andelar i koncernf�retag"
#SRU 1310 7230
#KONTO 1311 "Aktier i noterade svenska koncernf�retag"
#SRU 1311 7230
#KONTO 1312 "Aktier i onoterade svenska koncernf�retag"
#SRU 1312 7230
#KONTO 1313 "Aktier i noterade utl�ndska koncernf�retag"
#SRU 1313 7230
#KONTO 1314 "Aktier i onoterade utl�ndska koncernf�retag"
#SRU 1314 7230
#KONTO 1316 "�vriga andelar i koncernf�retag"
#SRU 1316 7230
#KONTO 1318 "Ackumulerade nedskrivningar av andelar i koncernf�retag"
#SRU 1318 7230
#KONTO 1320 "L�ngfristiga fordringar hos koncernf�retag"
#SRU 1320 7232
#KONTO 1321 "L�ngfristiga fordringar hos moderf�retag"
#SRU 1321 7232
#KONTO 1322 "L�ngfristiga fordringar hos dotterf�retag"
#SRU 1322 7232
#KONTO 1323 "L�ngfristiga fordringar hos andra koncernf�retag"
#SRU 1323 7232
#KONTO 1328 "Ackumulerade nedskrivningar av l�ngfristiga fordringar hos koncernf�retag"
#SRU 1328 7232
#KONTO 1330 "Andelar i intressef�retag"
#SRU 1330 7231
#KONTO 1336 "Andelar i ekonomiska f�reningar, intressef�retag"
#SRU 1336 7233
#KONTO 1338 "Ackumulerade nedskrivningar av andelar i intressef�retag"
#SRU 1338 7231
#KONTO 1340 "L�ngfristiga fordringar hos intressef�retag"
#SRU 1340 7232
#KONTO 1348 "Ackumulerade nedskrivningar av l�ngfristiga fordringar hos intressef�retag"
#SRU 1348 7232
#KONTO 1350 "Andelar och v�rdepapper i andra f�retag"
#SRU 1350 7233
#KONTO 1351 "Andelar i b�rsnoterade f�retag"
#SRU 1351 7233
#KONTO 1352 "Andra andelar"
#SRU 1352 7233
#KONTO 1353 "Andelar i bostadsr�ttsf�reningar"
#SRU 1353 7233
#KONTO 1354 "Obligationer"
#SRU 1354 7233
#KONTO 1356 "Andelar i ekonomiska f�reningar, �vriga f�retag"
#SRU 1356 7233
#KONTO 1358 "Ackumulerade nedskrivningar av andra andelar och v�rdepapper"
#SRU 1358 7233
#KONTO 1360 "L�n till del�gare eller n�rst�ende, l�ngfristig del"
#SRU 1360 7234
#KONTO 1369 "Ackumulerade nedskrivningar p� l�n till del�gare eller n�rst�ende, l�ngfristig del"
#SRU 1369 7234
#KONTO 1370 "Uppskjuten skattefordran"
#SRU 1370 7235
#KONTO 1380 "Andra l�ngfristiga fordringar"
#SRU 1380 7235
#KONTO 1381 "L�ngfristiga reversfordringar"
#SRU 1381 7235
#KONTO 1382 "L�ngfristiga fordringar hos anst�llda"
#SRU 1382 7235
#KONTO 1383 "L�mnade depositioner, l�ngfristiga"
#SRU 1383 7235
#KONTO 1384 "Derivat"
#SRU 1384 7235
#KONTO 1385 "V�rde av kapitalf�rs�kring"
#SRU 1385 7235
#KONTO 1386 "F�rutbetalda leasingavgifter, l�ngfristig del"
#SRU 1386 7235
#KONTO 1387 "L�ngfristiga kontraktsfordringar"
#SRU 1387 7235
#KONTO 1389 "Ackumulerade nedskrivningar av andra l�ngfristiga fordringar"
#SRU 1389 7235
#KONTO 1410 "Lager av r�varor"
#SRU 1410 7241
#KONTO 1419 "F�r�ndring av lager av r�varor"
#SRU 1419 7241
#KONTO 1420 "Lager av tillsatsmaterial och f�rn�denheter"
#SRU 1420 7241
#KONTO 1429 "F�r�ndring av lager av tillsatsmaterial och f�rn�denheter"
#SRU 1429 7241
#KONTO 1430 "Lager av halvfabrikat"
#SRU 1430 7241
#KONTO 1431 "Lager av k�pta halvfabrikat"
#SRU 1431 7241
#KONTO 1432 "Lager av egentillverkade halvfabrikat"
#SRU 1432 7242
#KONTO 1438 "F�r�ndring av lager av k�pta halvfabrikat"
#SRU 1438 7241
#KONTO 1439 "F�r�ndring av lager av egentillverkade halvfabrikat"
#SRU 1439 7242
#KONTO 1440 "Produkter i arbete"
#SRU 1440 7242
#KONTO 1449 "F�r�ndring av produkter i arbete"
#SRU 1449 7242
#KONTO 1450 "Lager av f�rdiga varor"
#SRU 1450 7243
#KONTO 1459 "F�r�ndring av lager av f�rdiga varor"
#SRU 1459 7243
#KONTO 1460 "Lager av handelsvaror"
#SRU 1460 7243
#KONTO 1465 "Lager av varor VMB"
#SRU 1465 7243
#KONTO 1466 "Nedskrivning av varor VMB"
#SRU 1466 7243
#KONTO 1467 "Lager av varor VMB f�renklad"
#SRU 1467 7243
#KONTO 1469 "F�r�ndring av lager av handelsvaror"
#SRU 1469 7243
#KONTO 1470 "P�g�ende arbeten"
#SRU 1470 7245
#KONTO 1471 "P�g�ende arbeten, nedlagda kostnader"
#SRU 1471 7245
#KONTO 1478 "P�g�ende arbeten, fakturering"
#SRU 1478 7245
#KONTO 1479 "F�r�ndring av p�g�ende arbeten"
#SRU 1479 7245
#KONTO 1480 "F�rskott f�r varor och tj�nster"
#SRU 1480 7246
#KONTO 1481 "Remburser"
#SRU 1481 7246
#KONTO 1489 "�vriga f�rskott till leverant�rer"
#SRU 1489 7246
#KONTO 1490 "�vriga lagertillg�ngar"
#SRU 1490 7244
#KONTO 1491 "Lager av v�rdepapper"
#SRU 1491 7244
#KONTO 1492 "Lager av fastigheter"
#SRU 1492 7244
#KONTO 1493 "Djur som klassificeras som oms�ttningstillg�ng"
#SRU 1493 7244
#KONTO 1510 "Kundfordringar"
#SRU 1510 7251
#KONTO 1511 "Kundfordringar"
#SRU 1511 7251
#KONTO 1512 "Bel�nade kundfordringar (factoring)"
#SRU 1512 7251
#KONTO 1513 "Kundfordringar - delad faktura"
#SRU 1513 7251
#KONTO 1515 "Os�kra kundfordringar"
#SRU 1515 7251
#KONTO 1516 "Tvistiga kundfordringar"
#SRU 1516 7251
#KONTO 1518 "Ej reskontraf�rda kundfordringar"
#SRU 1518 7251
#KONTO 1519 "Nedskrivning av kundfordringar"
#SRU 1519 7251
#KONTO 1520 "V�xelfordringar"
#SRU 1520 7251
#KONTO 1525 "Os�kra v�xelfordringar"
#SRU 1525 7251
#KONTO 1529 "Nedskrivning av v�xelfordringar"
#SRU 1529 7251
#KONTO 1530 "Kontraktsfordringar"
#SRU 1530 7251
#KONTO 1531 "Kontraktsfordringar"
#SRU 1531 7251
#KONTO 1532 "Bel�nade kontraktsfordringar"
#SRU 1532 7251
#KONTO 1535 "Os�kra kontraktsfordringar"
#SRU 1535 7251
#KONTO 1536 "Tvistiga kontraktsfordringar"
#SRU 1536 7251
#KONTO 1539 "Nedskrivning av kontraktsfordringar"
#SRU 1539 7251
#KONTO 1550 "Konsignationsfordringar"
#SRU 1550 7251
#KONTO 1560 "Kundfordringar hos koncernf�retag"
#SRU 1560 7252
#KONTO 1561 "Kundfordringar hos moderf�retag"
#SRU 1561 7252
#KONTO 1562 "Kundfordringar hos dotterf�retag"
#SRU 1562 7252
#KONTO 1563 "Kundfordringar hos andra koncernf�retag"
#SRU 1563 7252
#KONTO 1565 "Os�kra kundfordringar hos koncernf�retag"
#SRU 1565 7252
#KONTO 1568 "Ej reskontraf�rda kundfordringar hos koncernf�retag"
#SRU 1568 7252
#KONTO 1569 "Nedskrivning av kundfordringar hos koncernf�retag"
#SRU 1569 7252
#KONTO 1570 "Kundfordringar hos intressef�retag"
#SRU 1570 7252
#KONTO 1575 "Os�kra kundfordringar hos intressef�retag"
#SRU 1575 7252
#KONTO 1578 "Ej reskontraf�rda kundfordringar hos intressef�retag"
#SRU 1578 7252
#KONTO 1579 "Nedskrivning av kundfordringar hos intressef�retag"
#SRU 1579 7252
#KONTO 1580 "Fordringar f�r kontokort och kuponger"
#SRU 1580 7251
#KONTO 1610 "Kortfristiga fordringar hos anst�llda"
#SRU 1610 7261
#KONTO 1611 "Resef�rskott"
#SRU 1611 7261
#KONTO 1612 "Kassaf�rskott"
#SRU 1612 7261
#KONTO 1613 "�vriga f�rskott"
#SRU 1613 7261
#KONTO 1614 "Tillf�lliga l�n till anst�llda"
#SRU 1614 7261
#KONTO 1619 "�vriga fordringar hos anst�llda"
#SRU 1619 7261
#KONTO 1620 "Upparbetad men ej fakturerad int�kt"
#SRU 1620 7262
#KONTO 1630 "Avr�kning f�r skatter och avgifter (skattekonto)"
#SRU 1630 7261
#KONTO 1640 "Skattefordringar"
#SRU 1640 7261
#KONTO 1650 "Momsfordran"
#SRU 1650 7261
#KONTO 1660 "Kortfristiga fordringar hos koncernf�retag"
#SRU 1660 7252
#KONTO 1661 "Kortfristiga fordringar hos moderf�retag"
#SRU 1661 7252
#KONTO 1662 "Kortfristiga fordringar hos dotterf�retag"
#SRU 1662 7252
#KONTO 1663 "Kortfristiga fordringar hos andra koncernf�retag"
#SRU 1663 7252
#KONTO 1670 "Kortfristiga fordringar hos intressef�retag"
#SRU 1670 7252
#KONTO 1680 "Andra kortfristiga fordringar"
#SRU 1680 7261
#KONTO 1681 "Utl�gg f�r kunder"
#SRU 1681 7261
#KONTO 1682 "Kortfristiga l�nefordringar"
#SRU 1682 7261
#KONTO 1683 "Derivat"
#SRU 1683 7261
#KONTO 1684 "Kortfristiga fordringar hos leverant�rer"
#SRU 1684 7261
#KONTO 1685 "Kortfristiga fordringar hos del�gare eller n�rst�ende"
#SRU 1685 7261
#KONTO 1687 "Kortfristig del av l�ngfristiga fordringar"
#SRU 1687 7261
#KONTO 1688 "Fordran arbetsmarknadsf�rs�kringar"
#SRU 1688 7261
#KONTO 1689 "�vriga kortfristiga fordringar"
#SRU 1689 7261
#KONTO 1690 "Fordringar f�r tecknat men ej inbetalt aktiekapital"
#SRU 1690 7261
#KONTO 1710 "F�rutbetalda hyreskostnader"
#SRU 1710 7263
#KONTO 1720 "F�rutbetalda leasingavgifter, kortfristig del"
#SRU 1720 7263
#KONTO 1730 "F�rutbetalda f�rs�kringspremier"
#SRU 1730 7263
#KONTO 1740 "F�rutbetalda r�ntekostnader"
#SRU 1740 7263
#KONTO 1750 "Upplupna hyresint�kter"
#SRU 1750 7263
#KONTO 1760 "Upplupna r�nteint�kter"
#SRU 1760 7263
#KONTO 1770 "Tillg�ngar av kostnadsnatur"
#SRU 1770 7263
#KONTO 1780 "Upplupna avtalsint�kter"
#SRU 1780 7263
#KONTO 1790 "�vriga f�rutbetalda kostnader och upplupna int�kter"
#SRU 1790 7263
#KONTO 1810 "Andelar i b�rsnoterade f�retag"
#SRU 1810 7271
#KONTO 1820 "Obligationer"
#SRU 1820 7271
#KONTO 1830 "Konvertibla skuldebrev"
#SRU 1830 7271
#KONTO 1860 "Andelar i koncernf�retag"
#SRU 1860 7270
#KONTO 1869 "Nedskrivning av andelar i koncernf�retag"
#SRU 1869 7270
#KONTO 1880 "Andra kortfristiga placeringar"
#SRU 1880 7271
#KONTO 1886 "Derivat"
#SRU 1886 7271
#KONTO 1889 "Andelar i �vriga f�retag"
#SRU 1889 7271
#KONTO 1890 "Nedskrivning av kortfristiga placeringar"
#SRU 1890 7271
#KONTO 1910 "Kassa"
#SRU 1910 7281
#KONTO 1911 "Huvudkassa"
#SRU 1911 7281
#KONTO 1912 "Kassa 2"
#SRU 1912 7281
#KONTO 1913 "Kassa 3"
#SRU 1913 7281
#KONTO 1914 "Kassa 4"
#SRU 1914 7281
#KONTO 1920 "PlusGiro"
#SRU 1920 7281
#KONTO 1930 "F�retagskonto / aff�rskonto"
#SRU 1930 7281
#KONTO 1931 "Sparkonto"
#SRU 1931 7281
#KONTO 1940 "�vriga bankkonton"
#SRU 1940 7281
#KONTO 1950 "Bankcertifikat"
#SRU 1950 7281
#KONTO 1960 "Koncernkonto moderf�retag"
#SRU 1960 7281
#KONTO 1970 "S�rskilda bankkonton"
#SRU 1970 7281
#KONTO 1971 "Upplupna bemanningsint�kter "
#SRU 1971 7281
#KONTO 1972 "Upphovsmannakonto"
#SRU 1972 7281
#KONTO 1973 "Skogskonto"
#SRU 1973 7281
#KONTO 1974 "Sp�rrade bankmedel"
#SRU 1974 7281
#KONTO 1979 "�vriga s�rskilda bankkonton"
#SRU 1979 7281
#KONTO 1980 "Valutakonton"
#SRU 1980 7281
#KONTO 1990 "Redovisningsmedel"
#SRU 1990 7281
#KONTO 2010 "Eget kapital, del�gare 1"
#KONTO 2011 "Egna varuuttag"
#KONTO 2012 "Avr�kning f�r skatter och avgifter (skattekonto)"
#KONTO 2013 "�vriga egna uttag"
#KONTO 2017 "�rets kapitaltillskott"
#KONTO 2018 "�vriga egna ins�ttningar"
#KONTO 2019 "�rets resultat, del�gare 1"
#KONTO 2020 "Eget kapital, del�gare 2"
#KONTO 2023 "Egna uttag del�gare 2 (Handelsbolag)"
#KONTO 2028 "�vriga egna ins�ttningar, del�gare 2"
#KONTO 2029 "�rets resultat, del�gare 2"
#KONTO 2030 "Eget kapital, del�gare 3"
#KONTO 2033 "Egna uttag del�gare 3 (Handelsbolag)"
#KONTO 2038 "�vriga egna ins�ttningar, del�gare 3"
#KONTO 2039 "�rets resultat, del�gare 3"
#KONTO 2040 "Eget kapital, del�gare 4"
#KONTO 2043 "Egna uttag del�gare 4 (Handelsbolag)"
#KONTO 2048 "�vriga egna ins�ttningar, del�gare 4"
#KONTO 2049 "�rets resultat, del�gare 4"
#KONTO 2050 "Avs�ttning till expansionsfond"
#KONTO 2060 "Eget kapital i ideella f�reningar, stiftelser och registrerade trossamfund"
#KONTO 2061 "Eget kapital/stiftelsekapital/grundkapital"
#KONTO 2065 "F�r�ndring i fond f�r verkligt v�rde"
#KONTO 2066 "V�rdes�kringsfond"
#KONTO 2067 "Balanserad vinst eller f�rlust/balanserat kapital"
#KONTO 2068 "Vinst eller f�rlust fr�n f�reg�ende �r"
#KONTO 2069 "�rets resultat"
#KONTO 2070 "�ndam�lsbest�mda medel"
#KONTO 2071 "�ndam�l 1"
#KONTO 2072 "�ndam�l 2"
#KONTO 2080 "Bundet eget kapital"
#SRU 2080 7301
#KONTO 2081 "Aktiekapital"
#SRU 2081 7301
#KONTO 2082 "Ej registrerat aktiekapital"
#SRU 2082 7301
#KONTO 2083 "Medlemsinsatser"
#SRU 2083 7301
#KONTO 2084 "F�rlagsinsatser"
#SRU 2084 7301
#KONTO 2085 "Uppskrivningsfond"
#SRU 2085 7301
#KONTO 2086 "Reservfond"
#SRU 2086 7301
#KONTO 2087 "Insatsemission"
#SRU 2087 7301
#KONTO 2088 "Fond f�r yttre underh�ll"
#SRU 2088 7301
#KONTO 2090 "Fritt eget kapital"
#SRU 2090 7302
#KONTO 2091 "Balanserad vinst eller f�rlust"
#SRU 2091 7302
#KONTO 2092 "Mottagna/l�mnade koncernbidrag"
#SRU 2092 7302
#KONTO 2093 "Erh�llna aktie�gartillskott"
#SRU 2093 7302
#KONTO 2094 "Egna aktier"
#SRU 2094 7302
#KONTO 2095 "Fusionsresultat"
#SRU 2095 7302
#KONTO 2096 "Fond f�r verkligt v�rde"
#SRU 2096 7302
#KONTO 2097 "�verkursfond"
#SRU 2097 7302
#KONTO 2098 "Vinst eller f�rlust fr�n f�reg�ende �r"
#SRU 2098 7302
#KONTO 2099 "�rets resultat"
#SRU 2099 7302
#KONTO 2110 "Periodiseringsfond vid 2010 �rs taxering"
#SRU 2110 7321
#KONTO 2111 "Periodiseringsfond vid 2011 �rs taxering"
#SRU 2111 7321
#KONTO 2112 "Periodiseringsfond vid 2012 �rs taxering"
#SRU 2112 7321
#KONTO 2113 "Periodiseringsfond vid 2013 �rs taxering"
#SRU 2113 7321
#KONTO 2120 "Periodiseringsfonder"
#SRU 2120 7321
#KONTO 2123 "Periodiseringsfond 2020"
#SRU 2123 7321
#KONTO 2124 "Periodiseringsfond 2021"
#SRU 2124 7321
#KONTO 2125 "Periodiseringsfond 2022"
#SRU 2125 7321
#KONTO 2126 "Periodiseringsfond 2023"
#SRU 2126 7321
#KONTO 2127 "Periodiseringsfond 2017"
#SRU 2127 7321
#KONTO 2128 "Periodiseringsfond 2018"
#SRU 2128 7321
#KONTO 2129 "Periodiseringsfond 2019"
#SRU 2129 7321
#KONTO 2150 "Ackumulerade �veravskrivningar"
#SRU 2150 7322
#KONTO 2151 "Ackumulerade �veravskrivningar p� immateriella anl�ggningstillg�ngar"
#SRU 2151 7322
#KONTO 2152 "Ackumulerade �veravskrivningar p� byggnader och markanl�ggningar"
#SRU 2152 7322
#KONTO 2153 "Ackumulerade �veravskrivningar p� maskiner och inventarier"
#SRU 2153 7322
#KONTO 2160 "Ers�ttningsfond"
#SRU 2160 7323
#KONTO 2161 "Ers�ttningsfond maskiner och inventarier"
#SRU 2161 7323
#KONTO 2162 "Ers�ttningsfond byggnader och markanl�ggningar"
#SRU 2162 7323
#KONTO 2163 "Ers�ttningsfond mark"
#SRU 2163 7323
#KONTO 2164 "Ers�ttningsfond f�r djurlager i jordbruk och rensk�tsel"
#SRU 2164 7323
#KONTO 2180 "Obeskattade int�kter"
#SRU 2180 7323
#KONTO 2181 "Obeskattade upphovsmannaint�kter"
#SRU 2181 7323
#KONTO 2185 "Obeskattade skogsint�kter"
#SRU 2185 7323
#KONTO 2190 "�vriga obeskattade reserver"
#SRU 2190 7323
#KONTO 2196 "Lagerreserv"
#SRU 2196 7323
#KONTO 2199 "�vriga obeskattade reserver"
#SRU 2199 7323
#KONTO 2210 "Avs�ttningar f�r pensioner enligt tryggandelagen"
#SRU 2210 7331
#KONTO 2220 "Avs�ttningar f�r garantier"
#SRU 2220 7333
#KONTO 2230 "�vriga avs�ttningar f�r pensioner och liknande f�rpliktelser"
#SRU 2230 7332
#KONTO 2240 "Avs�ttningar f�r uppskjutna skatter"
#SRU 2240 7333
#KONTO 2250 "�vriga avs�ttningar f�r skatter"
#SRU 2250 7333
#KONTO 2252 "Avs�ttningar f�r tvistiga skatter"
#SRU 2252 7333
#KONTO 2253 "Avs�ttningar s�rskild l�neskatt, deklarationspost"
#SRU 2253 7333
#KONTO 2290 "�vriga avs�ttningar"
#SRU 2290 7333
#KONTO 2310 "Obligations- och f�rlagsl�n"
#SRU 2310 7350
#KONTO 2320 "Konvertibla l�n och liknande"
#SRU 2320 7350
#KONTO 2321 "Konvertibla l�n"
#SRU 2321 7350
#KONTO 2322 "L�n f�renade med optionsr�tt"
#SRU 2322 7350
#KONTO 2323 "Vinstandelsl�n"
#SRU 2323 7350
#KONTO 2324 "Kapitalandelsl�n"
#SRU 2324 7350
#KONTO 2330 "Checkr�kningskredit"
#SRU 2330 7351
#KONTO 2340 "Byggnadskreditiv"
#SRU 2340 7352
#KONTO 2350 "Andra l�ngfristiga skulder till kreditinstitut"
#SRU 2350 7352
#KONTO 2351 "Fastighetsl�n, l�ngfristig del"
#SRU 2351 7352
#KONTO 2355 "L�ngfristiga l�n i utl�ndsk valuta fr�n kreditinstitut"
#SRU 2355 7352
#KONTO 2359 "�vriga l�ngfristiga l�n fr�n kreditinstitut"
#SRU 2359 7352
#KONTO 2360 "L�ngfristiga skulder till koncernf�retag"
#SRU 2360 7353
#KONTO 2361 "L�ngfristiga skulder till moderf�retag"
#SRU 2361 7353
#KONTO 2362 "L�ngfristiga skulder till dotterf�retag"
#SRU 2362 7353
#KONTO 2363 "L�ngfristiga skulder till andra koncernf�retag"
#SRU 2363 7353
#KONTO 2370 "L�ngfristiga skulder till intressef�retag"
#SRU 2370 7353
#KONTO 2390 "�vriga l�ngfristiga skulder"
#SRU 2390 7354
#KONTO 2391 "Avbetalningskontrakt, l�ngfristig del"
#SRU 2391 7354
#KONTO 2392 "Villkorliga l�ngfristiga skulder"
#SRU 2392 7354
#KONTO 2393 "L�n fr�n n�rst�ende personer, l�ngfristig del"
#SRU 2393 7354
#KONTO 2394 "L�ngfristiga leverant�rskrediter"
#SRU 2394 7354
#KONTO 2395 "Andra l�ngfristiga l�n i utl�ndsk valuta"
#SRU 2395 7354
#KONTO 2396 "Derivat"
#SRU 2396 7354
#KONTO 2397 "Mottagna depositioner, l�ngfristiga"
#SRU 2397 7354
#KONTO 2399 "�vriga l�ngfristiga skulder"
#SRU 2399 7354
#KONTO 2410 "Andra kortfristiga l�neskulder till kreditinstitut"
#SRU 2410 7361
#KONTO 2411 "Kortfristiga l�n fr�n kreditinstitut"
#SRU 2411 7361
#KONTO 2417 "Kortfristig del av l�ngfristiga skulder till kreditinstitut"
#SRU 2417 7361
#KONTO 2419 "�vriga kortfristiga skulder till kreditinstitut"
#SRU 2419 7361
#KONTO 2420 "F�rskott fr�n kunder"
#SRU 2420 7362
#KONTO 2421 "Ej inl�sta presentkort"
#SRU 2421 7362
#KONTO 2429 "�vriga f�rskott fr�n kunder"
#SRU 2429 7362
#KONTO 2430 "P�g�ende arbeten"
#SRU 2430 7363
#KONTO 2431 "P�g�ende arbeten, fakturering"
#SRU 2431 7363
#KONTO 2438 "P�g�ende arbeten, nedlagda kostnader"
#SRU 2438 7363
#KONTO 2439 "Ber�knad f�r�ndring av p�g�ende arbeten"
#SRU 2439 7363
#KONTO 2440 "Leverant�rsskulder"
#SRU 2440 7365
#KONTO 2441 "Leverant�rsskulder"
#SRU 2441 7365
#KONTO 2443 "Konsignationsskulder"
#SRU 2443 7365
#KONTO 2445 "Tvistiga leverant�rsskulder"
#SRU 2445 7365
#KONTO 2448 "Ej reskontraf�rda leverant�rsskulder"
#SRU 2448 7365
#KONTO 2450 "Fakturerad men ej upparbetad int�kt"
#SRU 2450 7364
#KONTO 2460 "Leverant�rsskulder till koncernf�retag"
#SRU 2460 7367
#KONTO 2461 "Leverant�rsskulder till moderf�retag"
#SRU 2461 7367
#KONTO 2462 "Leverant�rsskulder till dotterf�retag"
#SRU 2462 7367
#KONTO 2463 "Leverant�rsskulder till andra koncernf�retag"
#SRU 2463 7367
#KONTO 2470 "Leverant�rsskulder till intressef�retag"
#SRU 2470 7367
#KONTO 2480 "Checkr�kningskredit, kortfristig"
#SRU 2480 7360
#KONTO 2490 "�vriga kortfristiga skulder till kreditinstitut, kunder och leverant�rer"
#SRU 2490 7369
#KONTO 2491 "Avr�kning spelarrang�rer"
#SRU 2491 7369
#KONTO 2492 "V�xelskulder"
#SRU 2492 7366
#KONTO 2499 "Andra �vriga kortfristiga skulder"
#SRU 2499 7369
#KONTO 2510 "Skatteskulder"
#SRU 2510 7368
#KONTO 2512 "Ber�knad inkomstskatt"
#SRU 2512 7368
#KONTO 2513 "Ber�knad fastighetsskatt/fastighetsavgift"
#SRU 2513 7368
#KONTO 2514 "Ber�knad s�rskild l�neskatt p� pensionskostnader"
#SRU 2514 7368
#KONTO 2515 "Ber�knad avkastningsskatt"
#SRU 2515 7368
#KONTO 2516 "Moms"
#SRU 2516 7368
#KONTO 2517 "Ber�knad utl�ndsk skatt"
#SRU 2517 7368
#KONTO 2518 "Betald F-skatt"
#SRU 2518 7368
#KONTO 2610 "Utg�ende moms, 25 %"
#SRU 2610 7369
#KONTO 2611 "Utg�ende moms p� f�rs�ljning inom Sverige, 25 %"
#SRU 2611 7369
#KONTO 2612 "Utg�ende moms p� egna uttag, 25 %"
#SRU 2612 7369
#KONTO 2613 "Utg�ende moms f�r uthyrning, 25 %"
#SRU 2613 7369
#KONTO 2614 "Utg�ende moms omv�nd skattskyldighet, 25 %"
#SRU 2614 7369
#KONTO 2615 "Utg�ende moms import av varor, 25%"
#SRU 2615 7369
#KONTO 2616 "Utg�ende moms VMB 25�%"
#SRU 2616 7369
#KONTO 2617 "Utg�ende moms omv�nd skattskyldighet varor och tj�nster i Sverige, 25 %"
#SRU 2617 7369
#KONTO 2618 "Vilande utg�ende moms, 25 %"
#SRU 2618 7369
#KONTO 2620 "Utg�ende moms, 12 %"
#SRU 2620 7369
#KONTO 2621 "Utg�ende moms p� f�rs�ljning inom Sverige, 12 %"
#SRU 2621 7369
#KONTO 2622 "Utg�ende moms p� egna uttag, 12 %"
#SRU 2622 7369
#KONTO 2623 "Utg�ende moms f�r uthyrning, 12 %"
#SRU 2623 7369
#KONTO 2624 "Utg�ende moms omv�nd skattskyldighet, 12 %"
#SRU 2624 7369
#KONTO 2625 "Utg�ende moms import av varor, 12 %"
#SRU 2625 7369
#KONTO 2626 "Utg�ende moms VMB 12�%"
#SRU 2626 7369
#KONTO 2627 "Utg�ende moms omv�nd skattskyldighet varor och tj�nster i Sverige, 12 %"
#SRU 2627 7369
#KONTO 2628 "Vilande utg�ende moms, 12 %"
#SRU 2628 7369
#KONTO 2630 "Utg�ende moms, 6 %"
#SRU 2630 7369
#KONTO 2631 "Utg�ende moms p� f�rs�ljning inom Sverige, 6 %"
#SRU 2631 7369
#KONTO 2632 "Utg�ende moms p� egna uttag, 6 %"
#SRU 2632 7369
#KONTO 2633 "Utg�ende moms f�r uthyrning, 6 %"
#SRU 2633 7369
#KONTO 2634 "Utg�ende moms omv�nd skattskyldighet, 6 %"
#SRU 2634 7369
#KONTO 2635 "Utg�ende moms import av varor, 6 %"
#SRU 2635 7369
#KONTO 2636 "Utg�ende moms VMB 6�%"
#SRU 2636 7369
#KONTO 2637 "Utg�ende moms omv�nd skattskyldighet varor och tj�nster i Sverige, 6 %"
#SRU 2637 7369
#KONTO 2638 "Vilande utg�ende moms, 6 %"
#SRU 2638 7369
#KONTO 2640 "Ing�ende moms"
#SRU 2640 7369
#KONTO 2641 "Debiterad ing�ende moms"
#SRU 2641 7369
#KONTO 2642 "Debiterad ing�ende moms i anslutning till frivillig skattskyldighet"
#SRU 2642 7369
#KONTO 2645 "Ber�knad ing�ende moms p� f�rv�rv fr�n utlandet"
#SRU 2645 7369
#KONTO 2646 "Ing�ende moms p� uthyrning"
#SRU 2646 7369
#KONTO 2647 "Ing�ende moms omv�nd skattskyldighet varor och tj�nster i Sverige"
#SRU 2647 7369
#KONTO 2648 "Vilande ing�ende moms"
#SRU 2648 7369
#KONTO 2649 "Ing�ende moms, blandad verksamhet"
#SRU 2649 7369
#KONTO 2650 "Redovisningskonto f�r moms"
#SRU 2650 7369
#KONTO 2660 "S�rskilda punktskatter"
#SRU 2660 7369
#KONTO 2661 "Reklamskatt"
#SRU 2661 7369
#KONTO 2668 "MOSS, moms"
#SRU 2668 7369
#KONTO 2669 "�vriga punktskatter"
#SRU 2669 7369
#KONTO 2710 "Personalskatt"
#SRU 2710 7369
#KONTO 2730 "Lagstadgade sociala avgifter och s�rskild l�neskatt"
#SRU 2730 7369
#KONTO 2731 "Avr�kning lagstadgade sociala avgifter"
#SRU 2731 7369
#KONTO 2732 "Avr�kning s�rskild l�neskatt"
#SRU 2732 7369
#KONTO 2740 "Avtalade sociala avgifter"
#SRU 2740 7369
#KONTO 2750 "Utm�tning i l�n m.m."
#SRU 2750 7369
#KONTO 2760 "Semestermedel"
#SRU 2760 7369
#KONTO 2761 "Avr�kning semesterl�ner"
#SRU 2761 7369
#KONTO 2762 "Semesterl�nekassa"
#SRU 2762 7369
#KONTO 2790 "�vriga l�neavdrag"
#SRU 2790 7369
#KONTO 2791 "Personalens intressekonto"
#SRU 2791 7369
#KONTO 2792 "L�nsparande"
#SRU 2792 7369
#KONTO 2793 "Gruppf�rs�kringspremier"
#SRU 2793 7369
#KONTO 2794 "Fackf�reningsavgifter"
#SRU 2794 7369
#KONTO 2795 "M�tnings- och granskningsarvoden"
#SRU 2795 7369
#KONTO 2799 "�vriga l�neavdrag"
#SRU 2799 7369
#KONTO 2810 "Avr�kning f�r factoring och bel�nade kontraktsfordringar"
#SRU 2810 7369
#KONTO 2811 "Avr�kning f�r factoring"
#SRU 2811 7369
#KONTO 2812 "Avr�kning f�r bel�nade kontraktsfordringar"
#SRU 2812 7369
#KONTO 2820 "Kortfristiga skulder till anst�llda"
#SRU 2820 7369
#KONTO 2821 "L�neskulder"
#SRU 2821 7369
#KONTO 2822 "Reser�kningar"
#SRU 2822 7369
#KONTO 2823 "Tantiem, gratifikationer"
#SRU 2823 7369
#KONTO 2829 "�vriga kortfristiga skulder till anst�llda"
#SRU 2829 7369
#KONTO 2830 "Avr�kning f�r annans r�kning"
#SRU 2830 7369
#KONTO 2840 "Kortfristiga l�neskulder"
#SRU 2840 7369
#KONTO 2841 "Kortfristig del av l�ngfristiga skulder"
#SRU 2841 7369
#KONTO 2849 "�vriga kortfristiga l�neskulder"
#SRU 2849 7369
#KONTO 2850 "Avr�kning f�r skatter och avgifter (skattekonto)"
#SRU 2850 7369
#KONTO 2860 "Kortfristiga skulder till koncernf�retag"
#SRU 2860 7367
#KONTO 2861 "Kortfristiga skulder till moderf�retag"
#SRU 2861 7367
#KONTO 2862 "Kortfristiga skulder till dotterf�retag"
#SRU 2862 7367
#KONTO 2863 "Kortfristiga skulder till andra koncernf�retag"
#SRU 2863 7367
#KONTO 2870 "Kortfristiga skulder till intressef�retag"
#SRU 2870 7367
#KONTO 2880 "Skuld erh�llna bidrag"
#SRU 2880 7369
#KONTO 2890 "�vriga kortfristiga skulder"
#SRU 2890 7369
#KONTO 2891 "Skulder under indrivning"
#SRU 2891 7369
#KONTO 2892 "Inre reparationsfond/underh�llsfond"
#SRU 2892 7369
#KONTO 2893 "Skulder till n�rst�ende personer, kortfristig del"
#SRU 2893 7369
#KONTO 2895 "Derivat (kortfristiga skulder)"
#SRU 2895 7369
#KONTO 2897 "Mottagna depositioner, kortfristiga"
#SRU 2897 7369
#KONTO 2898 "Outtagen vinstutdelning"
#SRU 2898 7369
#KONTO 2899 "�vriga kortfristiga skulder"
#SRU 2899 7369
#KONTO 2910 "Upplupna l�ner"
#SRU 2910 7370
#KONTO 2911 "L�neskulder"
#SRU 2911 7370
#KONTO 2912 "Ackords�verskott"
#SRU 2912 7370
#KONTO 2913 "Upplupna bemmaningskostnader"
#SRU 2913 7370
#KONTO 2919 "�vriga upplupna l�ner"
#SRU 2919 7370
#KONTO 2920 "Upplupna semesterl�ner"
#SRU 2920 7370
#KONTO 2930 "Upplupna pensionskostnader"
#SRU 2930 7370
#KONTO 2931 "Upplupna pensionsutbetalningar"
#SRU 2931 7370
#KONTO 2940 "Upplupna lagstadgade sociala och andra avgifter"
#SRU 2940 7370
#KONTO 2941 "Ber�knade upplupna lagstadgade sociala avgifter"
#SRU 2941 7370
#KONTO 2942 "Ber�knad upplupen s�rskild l�neskatt"
#SRU 2942 7370
#KONTO 2943 "Ber�knad upplupen s�rskild l�neskatt p� pensionskostnader, deklarationspost"
#SRU 2943 7370
#KONTO 2944 "Ber�knad upplupen avkastningsskatt p� pensionskostnader"
#SRU 2944 7370
#KONTO 2950 "Upplupna avtalade sociala avgifter"
#SRU 2950 7370
#KONTO 2951 "Upplupna avtalade arbetsmarknadsf�rs�kringar"
#SRU 2951 7370
#KONTO 2959 "Upplupna avtalade pensionsf�rs�kringsavgifter, deklarationspost"
#SRU 2959 7370
#KONTO 2960 "Upplupna r�ntekostnader"
#SRU 2960 7370
#KONTO 2970 "F�rutbetalda int�kter"
#SRU 2970 7370
#KONTO 2971 "F�rutbetalda hyresint�kter"
#SRU 2971 7370
#KONTO 2972 "F�rutbetalda medlemsavgifter"
#SRU 2972 7370
#KONTO 2979 "�vriga f�rutbetalda int�kter"
#SRU 2979 7370
#KONTO 2980 "Upplupna avtalskostnader"
#SRU 2980 7370
#KONTO 2990 "�vriga upplupna kostnader och f�rutbetalda int�kter"
#SRU 2990 7370
#KONTO 2991 "Ber�knat arvode f�r bokslut"
#SRU 2991 7370
#KONTO 2992 "Ber�knat arvode f�r revision"
#SRU 2992 7370
#KONTO 2993 "Ospecificerad skuld till leverant�rer"
#SRU 2993 7370
#KONTO 2998 "�vriga upplupna kostnader och f�rutbetalda int�kter"
#SRU 2998 7370
#KONTO 2999 "OBS-konto"
#SRU 2999 7370
#KONTO 3000 "F�rs�ljning inom Sverige"
#SRU 3000 7410
#KONTO 3001 "F�rs�ljning varor inom Sverige, 25 % moms"
#SRU 3001 7410
#KONTO 3002 "F�rs�ljning varor inom Sverige, 12 % moms"
#SRU 3002 7410
#KONTO 3003 "F�rs�ljning varor inom Sverige, 6 % moms"
#SRU 3003 7410
#KONTO 3004 "F�rs�ljning varor inom Sverige, momsfri"
#SRU 3004 7410
#KONTO 3011 "F�rs�ljning tj�nster inom Sverige, 25 % moms"
#SRU 3011 7410
#KONTO 3012 "F�rs�ljning tj�nster inom Sverige, 12 % moms"
#SRU 3012 7410
#KONTO 3013 "F�rs�ljning tj�nster inom Sverige, 6 % moms"
#SRU 3013 7410
#KONTO 3014 "F�rs�ljning tj�nster inom Sverige, momsfri"
#SRU 3014 7410
#KONTO 3071 "F�rutbetalda int�kter, varor och tj�nster"
#SRU 3071 7410
#KONTO 3089 "F�rs�ljning inom Sverige, momsfri"
#SRU 3089 7410
#KONTO 3099 "Justering av f�rs�ljning, ej moms"
#SRU 3099 7410
#KONTO 3105 "F�rs�ljning varor till land utanf�r EU"
#SRU 3105 7410
#KONTO 3106 "F�rs�ljning varor till annat EU-land, momspliktig"
#SRU 3106 7410
#KONTO 3107 "Treparts f�rs�ljn varor till EU"
#SRU 3107 7410
#KONTO 3108 "F�rs�ljning varor till annat EU-land, momsfri"
#SRU 3108 7410
#KONTO 3200 "F�rs�ljning VMB och omv�nd moms"
#SRU 3200 7410
#KONTO 3211 "F�rs�ljning positiv VMB 25 %"
#SRU 3211 7410
#KONTO 3212 "F�rs�ljning negativ VMB 25 %"
#SRU 3212 7410
#KONTO 3223 "Positiv VM omf�ringskonto"
#SRU 3223 7410
#KONTO 3231 "F�rs�ljning inom byggsektorn, omv�nd skattskyldighet moms"
#SRU 3231 7410
#KONTO 3305 "F�rs�ljning tj�nster till land utanf�r EU"
#SRU 3305 7410
#KONTO 3308 "F�rs�ljning tj�nster till annat EU-land"
#SRU 3308 7410
#KONTO 3311 "Uthyrning av l�rare "
#SRU 3311 7410
#KONTO 3389 "F�rs�ljning EU moms/MOSS"
#SRU 3389 7410
#KONTO 3401 "Egna uttag momspliktiga, 25 %"
#SRU 3401 7410
#KONTO 3402 "Egna uttag momspliktiga, 12 %"
#SRU 3402 7410
#KONTO 3403 "Egna uttag momspliktiga, 6 %"
#SRU 3403 7410
#KONTO 3404 "Egna uttag, momsfria"
#SRU 3404 7410
#KONTO 3500 "Fakturerade kostnader (gruppkonto)"
#SRU 3500 7410
#KONTO 3510 "Fakturerat emballage"
#SRU 3510 7410
#KONTO 3511 "Fakturerat emballage"
#SRU 3511 7410
#KONTO 3518 "Returnerat emballage"
#SRU 3518 7410
#KONTO 3520 "Fakturerade frakter"
#SRU 3520 7410
#KONTO 3521 "Fakturerade frakter, EU-land"
#SRU 3521 7410
#KONTO 3522 "Fakturerade frakter, export"
#SRU 3522 7410
#KONTO 3530 "Fakturerade tull- och speditionskostnader m.m."
#SRU 3530 7410
#KONTO 3540 "Faktureringsavgifter"
#SRU 3540 7410
#KONTO 3541 "Faktureringsavgifter, EU-land"
#SRU 3541 7410
#KONTO 3542 "Faktureringsavgifter, export"
#SRU 3542 7410
#KONTO 3550 "Fakturerade resekostnader"
#SRU 3550 7410
#KONTO 3560 "Fakturerade kostnader till koncernf�retag"
#SRU 3560 7410
#KONTO 3561 "Fakturerade kostnader till moderf�retag"
#SRU 3561 7410
#KONTO 3562 "Fakturerade kostnader till dotterf�retag"
#SRU 3562 7410
#KONTO 3563 "Fakturerade kostnader till andra koncernf�retag"
#SRU 3563 7410
#KONTO 3570 "Fakturerade kostnader till intressef�retag"
#SRU 3570 7410
#KONTO 3590 "�vriga fakturerade kostnader"
#SRU 3590 7410
#KONTO 3600 "R�relsens sidoint�kter (gruppkonto)"
#SRU 3600 7410
#KONTO 3610 "F�rs�ljning av material"
#SRU 3610 7410
#KONTO 3611 "F�rs�ljning av r�material"
#SRU 3611 7410
#KONTO 3612 "F�rs�ljning av skrot"
#SRU 3612 7410
#KONTO 3613 "F�rs�ljning av f�rbrukningsmaterial"
#SRU 3613 7410
#KONTO 3619 "F�rs�ljning av �vrigt material"
#SRU 3619 7410
#KONTO 3620 "Tillf�llig uthyrning av personal"
#SRU 3620 7410
#KONTO 3630 "Tillf�llig uthyrning av transportmedel"
#SRU 3630 7410
#KONTO 3670 "Int�kter fr�n v�rdepapper"
#SRU 3670 7410
#KONTO 3671 "F�rs�ljning av v�rdepapper"
#SRU 3671 7410
#KONTO 3672 "Utdelning fr�n v�rdepapper"
#SRU 3672 7410
#KONTO 3679 "�vriga int�kter fr�n v�rdepapper"
#SRU 3679 7410
#KONTO 3680 "Management fees"
#SRU 3680 7410
#KONTO 3690 "�vriga sidoint�kter"
#SRU 3690 7410
#KONTO 3700 "Int�ktskorrigeringar (gruppkonto)"
#SRU 3700 7410
#KONTO 3710 "Of�rdelade int�ktsreduktioner"
#SRU 3710 7410
#KONTO 3730 "L�mnade rabatter"
#SRU 3730 7410
#KONTO 3731 "L�mnade kassarabatter"
#SRU 3731 7410
#KONTO 3732 "L�mnade m�ngdrabatter"
#SRU 3732 7410
#KONTO 3740 "�res- och kronutj�mning"
#SRU 3740 7410
#KONTO 3750 "Punktskatter"
#SRU 3750 7410
#KONTO 3751 "Int�ktsf�rda punktskatter (kreditkonto)"
#SRU 3751 7410
#KONTO 3752 "Skuldf�rda punktskatter (debetkonto)"
#SRU 3752 7410
#KONTO 3790 "�vriga int�ktskorrigeringar"
#SRU 3790 7410
#KONTO 3800 "Aktiverat arbete f�r egen r�kning (gruppkonto)"
#SRU 3800 7412
#KONTO 3840 "Aktiverat arbete (material)"
#SRU 3840 7412
#KONTO 3850 "Aktiverat arbete (omkostnader)"
#SRU 3850 7412
#KONTO 3870 "Aktiverat arbete (personal)"
#SRU 3870 7412
#KONTO 3900 "�vriga r�relseint�kter (gruppkonto)"
#SRU 3900 7413
#KONTO 3910 "Hyres- och arrendeint�kter"
#SRU 3910 7413
#KONTO 3911 "Hyresint�kter"
#SRU 3911 7413
#KONTO 3912 "Arrendeint�kter"
#SRU 3912 7413
#KONTO 3913 "Frivilligt momspliktiga hyresint�kter"
#SRU 3913 7413
#KONTO 3914 "�vriga momspliktiga hyresint�kter"
#SRU 3914 7413
#KONTO 3920 "Provisionsint�kter, licensint�kter och royalties"
#SRU 3920 7413
#KONTO 3921 "Provisionsint�kter"
#SRU 3921 7413
#KONTO 3922 "Licensint�kter och royalties"
#SRU 3922 7413
#KONTO 3925 "Franchiseint�kter"
#SRU 3925 7413
#KONTO 3929 "Kickback momsfri"
#SRU 3929 7413
#KONTO 3930 "P�minnelseavgifter"
#SRU 3930 7413
#KONTO 3940 "Orealiserade negativa/positiva v�rdef�r�ndringar p� s�kringsinstrument"
#SRU 3940 7413
#KONTO 3950 "�tervunna, tidigare avskrivna kundfordringar"
#SRU 3950 7413
#KONTO 3960 "Valutakursvinster p� fordringar och skulder av r�relsekarakt�r"
#SRU 3960 7413
#KONTO 3970 "Vinst vid avyttring av immateriella och materiella anl�ggningstillg�ngar"
#SRU 3970 7413
#KONTO 3971 "Vinst vid avyttring av immateriella anl�ggningstillg�ngar"
#SRU 3971 7413
#KONTO 3972 "Vinst vid avyttring av byggnader och mark"
#SRU 3972 7413
#KONTO 3973 "Vinst vid avyttring av maskiner och inventarier"
#SRU 3973 7413
#KONTO 3980 "Erh�llna offentliga st�d m.m."
#SRU 3980 7413
#KONTO 3981 "Erh�llna EU-bidrag"
#SRU 3981 7413
#KONTO 3985 "Erh�llna statliga bidrag"
#SRU 3985 7413
#KONTO 3987 "Erh�llna kommunala bidrag"
#SRU 3987 7413
#KONTO 3988 "Erh�llna bidrag och ers�ttningar f�r personal"
#SRU 3988 7413
#KONTO 3989 "�vriga erh�llna bidrag"
#SRU 3989 7413
#KONTO 3990 "�vriga ers�ttningar och int�kter"
#SRU 3990 7413
#KONTO 3991 "Konflikters�ttning"
#SRU 3991 7413
#KONTO 3992 "Erh�llna skadest�nd"
#SRU 3992 7413
#KONTO 3993 "Erh�llna donationer och g�vor"
#SRU 3993 7413
#KONTO 3994 "F�rs�kringsers�ttningar"
#SRU 3994 7413
#KONTO 3995 "Erh�llet ackord p� skulder av r�relsekarakt�r"
#SRU 3995 7413
#KONTO 3996 "Erh�llna reklambidrag"
#SRU 3996 7413
#KONTO 3997 "Sjukl�neers�ttning"
#SRU 3997 7413
#KONTO 3998 "Sjukpenning"
#SRU 3998 7413
#KONTO 3999 "�vriga r�relseint�kter"
#SRU 3999 7413
#KONTO 4000 "Ink�p av varor fr�n Sverige"
#SRU 4000 7512
#KONTO 4010 "Ink�p material och varor"
#SRU 4010 7512
#KONTO 4200 "S�lda varor VMB"
#SRU 4200 7512
#KONTO 4211 "S�lda varor positiv VMB 25 %"
#SRU 4211 7512
#KONTO 4212 "S�lda varor negativ VMB 25 %"
#SRU 4212 7512
#KONTO 4400 "Ink�pta tj�nster i Sverige, omv�nd skattskyldighet"
#SRU 4400 7512
#KONTO 4415 "Ink�pta varor i Sverige, omv�nd skattskyldighet, 25 %"
#SRU 4415 7512
#KONTO 4416 "Ink�pta varor i Sverige, omv�nd skattskyldighet, 12 %"
#SRU 4416 7512
#KONTO 4417 "Ink�pta varor i Sverige, omv�nd skattskyldighet, 6 %"
#SRU 4417 7512
#KONTO 4425 "Ink�pta tj�nster i Sverige, omv�nd skattskyldighet, 25 %"
#SRU 4425 7512
#KONTO 4426 "Ink�pta tj�nster i Sverige, omv�nd skattskyldighet, 12 %"
#SRU 4426 7512
#KONTO 4427 "Ink�pta tj�nster i Sverige, omv�nd skattskyldighet, 6 %"
#SRU 4427 7512
#KONTO 4500 "Ink�p utanf�r Sverige"
#SRU 4500 7512
#KONTO 4512 "F�rv�rv varor, trepartsf�rv�rv fr�n annat EU-land, mellan man"
#SRU 4512 7512
#KONTO 4515 "Ink�p av varor fr�n annat EU-land, 25 %"
#SRU 4515 7512
#KONTO 4516 "Ink�p av varor fr�n annat EU-land, 12 %"
#SRU 4516 7512
#KONTO 4517 "Ink�p av varor fr�n annat EU-land, 6 %"
#SRU 4517 7512
#KONTO 4518 "Ink�p av varor fr�n annat EU-land, momsfri"
#SRU 4518 7512
#KONTO 4530 "Bemanningskostnader"
#SRU 4530 7512
#KONTO 4531 "Import tj�nster land utanf�r EU, 25% moms"
#SRU 4531 7512
#KONTO 4532 "Import tj�nster land utanf�r EU, 12% moms"
#SRU 4532 7512
#KONTO 4533 "Import tj�nster land utanf�r EU, 6% moms"
#SRU 4533 7512
#KONTO 4534 "Import tj�nster land utanf�r EU, momsfri"
#SRU 4534 7512
#KONTO 4535 "Ink�p av tj�nster fr�n annat EU-land, 25 %"
#SRU 4535 7512
#KONTO 4536 "Ink�p av tj�nster fr�n annat EU-land, 12 %"
#SRU 4536 7512
#KONTO 4537 "Ink�p av tj�nster fr�n annat EU-land, 6 %"
#SRU 4537 7512
#KONTO 4538 "Ink�p av tj�nster fr�n annat EU-land, momsfri"
#SRU 4538 7512
#KONTO 4545 "Import av varor, 25 % moms"
#SRU 4545 7512
#KONTO 4546 "Import av varor, 12 % moms"
#SRU 4546 7512
#KONTO 4547 "Import av varor, 6 % moms"
#SRU 4547 7512
#KONTO 4549 "Motkonto beskattningsunderlag import"
#SRU 4549 7512
#KONTO 4598 "Justering, omv�nd moms"
#SRU 4598 7512
#KONTO 4600 "Legoarbeten och underentreprenader (gruppkonto)"
#SRU 4600 7512
#KONTO 4700 "Reduktion av ink�pspriser (gruppkonto)"
#SRU 4700 7512
#KONTO 4730 "Erh�llna rabatter"
#SRU 4730 7512
#KONTO 4731 "Erh�llna kassarabatter"
#SRU 4731 7512
#KONTO 4732 "Erh�llna m�ngdrabatter (inkl. bonus)"
#SRU 4732 7512
#KONTO 4733 "Erh�llet aktivitetsst�d"
#SRU 4733 7512
#KONTO 4790 "�vriga reduktioner av ink�pspriser"
#SRU 4790 7512
#KONTO 4900 "F�r�ndring av lager (gruppkonto)"
#SRU 4900 7411
#KONTO 4910 "F�r�ndring av lager av r�varor"
#SRU 4910 7511
#KONTO 4920 "F�r�ndring av lager av tillsatsmaterial och f�rn�denheter"
#SRU 4920 7511
#KONTO 4930 "F�r�ndring av lager av halvfabrikat"
#SRU 4930 7511
#KONTO 4931 "F�r�ndring av lager av k�pta halvfabrikat"
#SRU 4931 7511
#KONTO 4932 "F�r�ndring av lager av egentillverkade halvfabrikat"
#SRU 4932 7411
#KONTO 4940 "F�r�ndring av produkter i arbete"
#SRU 4940 7411
#KONTO 4944 "F�r�ndring av produkter i arbete, material och utl�gg"
#SRU 4944 7411
#KONTO 4945 "F�r�ndring av produkter i arbete, omkostnader"
#SRU 4945 7411
#KONTO 4947 "F�r�ndring av produkter i arbete, personalkostnader"
#SRU 4947 7411
#KONTO 4950 "F�r�ndring av lager av f�rdiga varor"
#SRU 4950 7411
#KONTO 4960 "F�r�ndring av lager av handelsvaror"
#SRU 4960 7512
#KONTO 4970 "F�r�ndring av p�g�ende arbeten, nedlagda kostnader"
#SRU 4970 7411
#KONTO 4974 "F�r�ndring av p�g�ende arbeten, material och utl�gg"
#SRU 4974 7411
#KONTO 4975 "F�r�ndring av p�g�ende arbeten, omkostnader"
#SRU 4975 7411
#KONTO 4977 "F�r�ndring av p�g�ende arbeten, personalkostnader"
#SRU 4977 7411
#KONTO 4980 "F�r�ndring av lager av v�rdepapper"
#SRU 4980 7512
#KONTO 4981 "S�lda v�rdepappers anskaffningsv�rde"
#SRU 4981 7512
#KONTO 4987 "Nedskrivning av v�rdepapper"
#SRU 4987 7512
#KONTO 4988 "�terf�ring av nedskrivning av v�rdepapper"
#SRU 4988 7512
#KONTO 4990 "F�r�ndring av lager och p�g�ende arbeten (of�rdelad)"
#SRU 4990 7411
#KONTO 5000 "Lokalkostnader (gruppkonto)"
#SRU 5000 7513
#KONTO 5010 "Lokalhyra"
#SRU 5010 7513
#KONTO 5011 "Hyra f�r kontorslokaler"
#SRU 5011 7513
#KONTO 5012 "Hyra f�r garage"
#SRU 5012 7513
#KONTO 5013 "Hyra f�r lagerlokaler"
#SRU 5013 7513
#KONTO 5020 "El f�r belysning"
#SRU 5020 7513
#KONTO 5030 "V�rme"
#SRU 5030 7513
#KONTO 5040 "Vatten och avlopp"
#SRU 5040 7513
#KONTO 5050 "Lokaltillbeh�r"
#SRU 5050 7513
#KONTO 5060 "St�dning och renh�llning"
#SRU 5060 7513
#KONTO 5061 "St�dning"
#SRU 5061 7513
#KONTO 5062 "Soph�mtning"
#SRU 5062 7513
#KONTO 5063 "Hyra f�r sopcontainer"
#SRU 5063 7513
#KONTO 5064 "Sn�r�jning"
#SRU 5064 7513
#KONTO 5065 "Tr�dg�rdssk�tsel"
#SRU 5065 7513
#KONTO 5070 "Reparation och underh�ll av lokaler"
#SRU 5070 7513
#KONTO 5090 "�vriga lokalkostnader"
#SRU 5090 7513
#KONTO 5098 "�vriga lokalkostnader, avdragsgilla"
#SRU 5098 7513
#KONTO 5099 "�vriga lokalkostnader, ej avdragsgilla"
#SRU 5099 7513
#KONTO 5100 "Fastighetskostnader (gruppkonto)"
#SRU 5100 7513
#KONTO 5110 "Tomtr�ttsavg�ld/arrende"
#SRU 5110 7513
#KONTO 5120 "El f�r belysning"
#SRU 5120 7513
#KONTO 5130 "V�rme"
#SRU 5130 7513
#KONTO 5131 "Uppv�rmning"
#SRU 5131 7513
#KONTO 5132 "Sotning"
#SRU 5132 7513
#KONTO 5140 "Vatten och avlopp"
#SRU 5140 7513
#KONTO 5160 "St�dning och renh�llning"
#SRU 5160 7513
#KONTO 5161 "St�dning"
#SRU 5161 7513
#KONTO 5162 "Soph�mtning"
#SRU 5162 7513
#KONTO 5163 "Hyra f�r sopcontainer"
#SRU 5163 7513
#KONTO 5164 "Sn�r�jning"
#SRU 5164 7513
#KONTO 5165 "Tr�dg�rdssk�tsel"
#SRU 5165 7513
#KONTO 5170 "Reparation och underh�ll av fastighet"
#SRU 5170 7513
#KONTO 5190 "�vriga fastighetskostnader"
#SRU 5190 7513
#KONTO 5191 "Fastighetsskatt/fastighetsavgift"
#SRU 5191 7513
#KONTO 5192 "Fastighetsf�rs�kringspremier"
#SRU 5192 7513
#KONTO 5193 "Fastighetssk�tsel och f�rvaltning"
#SRU 5193 7513
#KONTO 5198 "�vriga fastighetskostnader, avdragsgilla"
#SRU 5198 7513
#KONTO 5199 "�vriga fastighetskostnader, ej avdragsgilla"
#SRU 5199 7513
#KONTO 5200 "Hyra av anl�ggningstillg�ngar (gruppkonto)"
#SRU 5200 7513
#KONTO 5210 "Hyra av maskiner och andra tekniska anl�ggningar"
#SRU 5210 7513
#KONTO 5211 "Korttidshyra av maskiner och andra tekniska anl�ggningar"
#SRU 5211 7513
#KONTO 5212 "Leasing av maskiner och andra tekniska anl�ggningar"
#SRU 5212 7513
#KONTO 5220 "Hyra av inventarier och verktyg"
#SRU 5220 7513
#KONTO 5221 "Korttidshyra av inventarier och verktyg"
#SRU 5221 7513
#KONTO 5222 "Leasing av inventarier och verktyg"
#SRU 5222 7513
#KONTO 5250 "Hyra av datorer"
#SRU 5250 7513
#KONTO 5251 "Korttidshyra av datorer"
#SRU 5251 7513
#KONTO 5252 "Leasing av datorer"
#SRU 5252 7513
#KONTO 5290 "�vriga hyreskostnader f�r anl�ggningstillg�ngar"
#SRU 5290 7513
#KONTO 5300 "Energikostnader (gruppkonto)"
#SRU 5300 7513
#KONTO 5310 "El f�r drift"
#SRU 5310 7513
#KONTO 5320 "Gas"
#SRU 5320 7513
#KONTO 5330 "Eldningsolja"
#SRU 5330 7513
#KONTO 5340 "Stenkol och koks"
#SRU 5340 7513
#KONTO 5350 "Torv, tr�kol, ved och annat tr�br�nsle"
#SRU 5350 7513
#KONTO 5360 "Bensin, fotogen och motorbr�nnolja"
#SRU 5360 7513
#KONTO 5370 "Fj�rrv�rme, kyla och �nga"
#SRU 5370 7513
#KONTO 5380 "Vatten"
#SRU 5380 7513
#KONTO 5390 "�vriga energikostnader"
#SRU 5390 7513
#KONTO 5400 "F�rbrukningsinventarier och f�rbrukningsmaterial (gruppkonto)"
#SRU 5400 7513
#KONTO 5410 "F�rbrukningsinventarier"
#SRU 5410 7513
#KONTO 5411 "F�rbrukningsinventarier med en livsl�ngd p� mer �n ett �r"
#SRU 5411 7513
#KONTO 5412 "F�rbrukningsinventarier med en livsl�ngd p� ett �r eller mindre"
#SRU 5412 7513
#KONTO 5420 "Programvaror"
#SRU 5420 7513
#KONTO 5430 "Transportinventarier"
#SRU 5430 7513
#KONTO 5440 "F�rbrukningsemballage"
#SRU 5440 7513
#KONTO 5460 "F�rbrukningsmaterial"
#SRU 5460 7513
#KONTO 5480 "Arbetskl�der och skyddsmaterial"
#SRU 5480 7513
#KONTO 5490 "�vriga f�rbrukningsinventarier och f�rbrukningsmaterial"
#SRU 5490 7513
#KONTO 5491 "�vriga f�rbrukningsinventarier med en livsl�ngd p� mer �n ett �r"
#SRU 5491 7513
#KONTO 5492 "�vriga f�rbrukningsinventarier med en livsl�ngd p� ett �r eller mindre"
#SRU 5492 7513
#KONTO 5493 "�vrigt f�rbrukningsmaterial"
#SRU 5493 7513
#KONTO 5500 "Reparation och underh�ll (gruppkonto)"
#SRU 5500 7513
#KONTO 5510 "Reparation och underh�ll av maskiner och andra tekniska anl�ggningar"
#SRU 5510 7513
#KONTO 5520 "Reparation och underh�ll av inventarier, verktyg och datorer m.m."
#SRU 5520 7513
#KONTO 5530 "Reparation och underh�ll av installationer"
#SRU 5530 7513
#KONTO 5550 "Reparation och underh�ll av f�rbrukningsinventarier"
#SRU 5550 7513
#KONTO 5580 "Underh�ll och tv�tt av arbetskl�der"
#SRU 5580 7513
#KONTO 5590 "�vriga kostnader f�r reparation och underh�ll"
#SRU 5590 7513
#KONTO 5600 "Kostnader f�r transportmedel (gruppkonto)"
#SRU 5600 7513
#KONTO 5610 "Personbilskostnader"
#SRU 5610 7513
#KONTO 5611 "Drivmedel f�r personbilar"
#SRU 5611 7513
#KONTO 5612 "F�rs�kring och skatt f�r personbilar"
#SRU 5612 7513
#KONTO 5613 "Reparation och underh�ll av personbilar"
#SRU 5613 7513
#KONTO 5615 "Leasing av personbilar"
#SRU 5615 7513
#KONTO 5616 "Tr�ngselskatt, avdragsgill"
#SRU 5616 7513
#KONTO 5619 "�vriga personbilskostnader"
#SRU 5619 7513
#KONTO 5620 "Lastbilskostnader"
#SRU 5620 7513
#KONTO 5630 "Truckkostnader"
#SRU 5630 7513
#KONTO 5640 "Kostnader f�r arbetsmaskiner"
#SRU 5640 7513
#KONTO 5650 "Traktorkostnader"
#SRU 5650 7513
#KONTO 5660 "Motorcykel-, moped- och skoterkostnader"
#SRU 5660 7513
#KONTO 5670 "B�t-, flygplans- och helikopterkostnader"
#SRU 5670 7513
#KONTO 5690 "�vriga kostnader f�r transportmedel"
#SRU 5690 7513
#KONTO 5700 "Frakter och transporter (gruppkonto)"
#SRU 5700 7513
#KONTO 5710 "Frakter, transporter och f�rs�kringar vid varudistribution"
#SRU 5710 7513
#KONTO 5720 "Tull- och speditionskostnader m.m."
#SRU 5720 7513
#KONTO 5730 "Arbetstransporter"
#SRU 5730 7513
#KONTO 5790 "�vriga kostnader f�r frakter och transporter"
#SRU 5790 7513
#KONTO 5800 "Resekostnader (gruppkonto)"
#SRU 5800 7513
#KONTO 5810 "Biljetter"
#SRU 5810 7513
#KONTO 5820 "Hyrbilskostnader"
#SRU 5820 7513
#KONTO 5830 "Kost och logi"
#SRU 5830 7513
#KONTO 5831 "Kost och logi i Sverige"
#SRU 5831 7513
#KONTO 5832 "Kost och logi i utlandet"
#SRU 5832 7513
#KONTO 5841 "Milers�ttning, avdragsgill (�gare enskild firma)"
#SRU 5841 7513
#KONTO 5842 "Milers�ttning, ej avdragsgill (�gare enskild firma)"
#SRU 5842 7513
#KONTO 5843 "Traktamente Sverige avdragsgillt (�gare enskild firma)"
#SRU 5843 7513
#KONTO 5844 "Traktamente Sverige ej avdragsgillt (�gare enskild firma)"
#SRU 5844 7513
#KONTO 5845 "Traktamente Utlandet avdragsgillt (�gare enskild firma)"
#SRU 5845 7513
#KONTO 5846 "Traktamente Utlandet ej avdragsgillt (�gare enskild firma)"
#SRU 5846 7513
#KONTO 5890 "�vriga resekostnader"
#SRU 5890 7513
#KONTO 5900 "Reklam och PR (gruppkonto)"
#SRU 5900 7513
#KONTO 5910 "Annonsering"
#SRU 5910 7513
#KONTO 5920 "Utomhus- och trafikreklam"
#SRU 5920 7513
#KONTO 5930 "Reklamtrycksaker och direktreklam"
#SRU 5930 7513
#KONTO 5940 "Utst�llningar och m�ssor"
#SRU 5940 7513
#KONTO 5950 "Butiksreklam och �terf�rs�ljarreklam"
#SRU 5950 7513
#KONTO 5960 "Varuprover, reklamg�vor, presentreklam och t�vlingar"
#SRU 5960 7513
#KONTO 5970 "Film-, radio-, TV- och Internetreklam"
#SRU 5970 7513
#KONTO 5980 "PR, institutionell reklam och sponsring"
#SRU 5980 7513
#KONTO 5990 "�vriga kostnader f�r reklam och PR"
#SRU 5990 7513
#KONTO 6000 "�vriga f�rs�ljningskostnader (gruppkonto)"
#SRU 6000 7513
#KONTO 6010 "Kataloger, prislistor m.m."
#SRU 6010 7513
#KONTO 6020 "Egna facktidskrifter"
#SRU 6020 7513
#KONTO 6030 "Speciella orderkostnader"
#SRU 6030 7513
#KONTO 6040 "Kontokortsavgifter"
#SRU 6040 7513
#KONTO 6050 "F�rs�ljningsprovisioner"
#SRU 6050 7513
#KONTO 6055 "Franchisekostnader o.dyl."
#SRU 6055 7513
#KONTO 6060 "Kreditf�rs�ljningskostnader"
#SRU 6060 7513
#KONTO 6061 "Kreditupplysning"
#SRU 6061 7513
#KONTO 6062 "Inkasso och KFM-avgifter"
#SRU 6062 7513
#KONTO 6063 "Kreditf�rs�kringspremier"
#SRU 6063 7513
#KONTO 6064 "Factoringavgifter"
#SRU 6064 7513
#KONTO 6069 "�vriga kreditf�rs�ljningskostnader"
#SRU 6069 7513
#KONTO 6070 "Representation"
#SRU 6070 7513
#KONTO 6071 "Representation, avdragsgill"
#SRU 6071 7513
#KONTO 6072 "Representation, ej avdragsgill"
#SRU 6072 7513
#KONTO 6080 "Bankgarantier"
#SRU 6080 7513
#KONTO 6090 "�vriga f�rs�ljningskostnader"
#SRU 6090 7513
#KONTO 6100 "Kontorsmateriel och trycksaker (gruppkonto)"
#SRU 6100 7513
#KONTO 6110 "Kontorsmateriel"
#SRU 6110 7513
#KONTO 6150 "Trycksaker"
#SRU 6150 7513
#KONTO 6200 "Tele och post (gruppkonto)"
#SRU 6200 7513
#KONTO 6210 "Telekommunikation"
#SRU 6210 7513
#KONTO 6211 "Fast telefoni"
#SRU 6211 7513
#KONTO 6212 "Mobiltelefon"
#SRU 6212 7513
#KONTO 6213 "Mobils�kning"
#SRU 6213 7513
#KONTO 6214 "Fax"
#SRU 6214 7513
#KONTO 6215 "Telex"
#SRU 6215 7513
#KONTO 6230 "Datakommunikation"
#SRU 6230 7513
#KONTO 6250 "Postbefordran"
#SRU 6250 7513
#KONTO 6251 "Porto (Billogram)"
#SRU 6251 7513
#KONTO 6300 "F�retagsf�rs�kringar och �vriga riskkostnader (gruppkonto)"
#SRU 6300 7513
#KONTO 6310 "F�retagsf�rs�kringar"
#SRU 6310 7513
#KONTO 6320 "Sj�lvrisker vid skada"
#SRU 6320 7513
#KONTO 6330 "F�rluster i p�g�ende arbeten"
#SRU 6330 7513
#KONTO 6340 "L�mnade skadest�nd"
#SRU 6340 7513
#KONTO 6341 "L�mnade skadest�nd, avdragsgilla"
#SRU 6341 7513
#KONTO 6342 "L�mnade skadest�nd, ej avdragsgilla"
#SRU 6342 7513
#KONTO 6350 "F�rluster p� kundfordringar"
#SRU 6350 7513
#KONTO 6351 "Konstaterade f�rluster p� kundfordringar"
#SRU 6351 7513
#KONTO 6352 "Befarade f�rluster p� kundfordringar"
#SRU 6352 7513
#KONTO 6360 "Garantikostnader"
#SRU 6360 7513
#KONTO 6361 "F�r�ndring av garantiavs�ttning"
#SRU 6361 7513
#KONTO 6362 "Faktiska garantikostnader"
#SRU 6362 7513
#KONTO 6370 "Kostnader f�r bevakning och larm"
#SRU 6370 7513
#KONTO 6380 "F�rluster p� �vriga kortfristiga fordringar"
#SRU 6380 7513
#KONTO 6390 "�vriga riskkostnader"
#SRU 6390 7513
#KONTO 6400 "F�rvaltningskostnader (gruppkonto)"
#SRU 6400 7513
#KONTO 6410 "Styrelsearvoden som inte �r l�n"
#SRU 6410 7513
#KONTO 6420 "Ers�ttningar till revisor"
#SRU 6420 7513
#KONTO 6421 "Revision"
#SRU 6421 7513
#KONTO 6422 "Revisonsverksamhet ut�ver revision"
#SRU 6422 7513
#KONTO 6423 "Skatter�dgivning - revisor"
#SRU 6423 7513
#KONTO 6424 "�vriga tj�nster - revisor"
#SRU 6424 7513
#KONTO 6430 "Management fees"
#SRU 6430 7513
#KONTO 6440 "�rsredovisning och del�rsrapporter"
#SRU 6440 7513
#KONTO 6450 "Bolagsst�mma/�rs- eller f�reningsst�mma"
#SRU 6450 7513
#KONTO 6490 "�vriga f�rvaltningskostnader"
#SRU 6490 7513
#KONTO 6500 "�vriga externa tj�nster (gruppkonto)"
#SRU 6500 7513
#KONTO 6510 "M�tningskostnader"
#SRU 6510 7513
#KONTO 6520 "Ritnings- och kopieringskostnader"
#SRU 6520 7513
#KONTO 6530 "Redovisningstj�nster"
#SRU 6530 7513
#KONTO 6540 "IT-tj�nster"
#SRU 6540 7513
#KONTO 6541 "Fortnox"
#SRU 6541 7513
#KONTO 6550 "Konsultarvoden"
#SRU 6550 7513
#KONTO 6560 "Serviceavgifter till branschorganisationer"
#SRU 6560 7513
#KONTO 6570 "Bankkostnader"
#SRU 6570 7513
#KONTO 6580 "Advokat- och r�tteg�ngskostnader"
#SRU 6580 7513
#KONTO 6590 "�vriga externa tj�nster"
#SRU 6590 7513
#KONTO 6800 "Inhyrd personal (gruppkonto)"
#SRU 6800 7513
#KONTO 6810 "Inhyrd produktionspersonal"
#SRU 6810 7513
#KONTO 6820 "Inhyrd lagerpersonal"
#SRU 6820 7513
#KONTO 6830 "Inhyrd transportpersonal"
#SRU 6830 7513
#KONTO 6840 "Inhyrd kontors- och ekonomipersonal"
#SRU 6840 7513
#KONTO 6850 "Inhyrd IT-personal"
#SRU 6850 7513
#KONTO 6860 "Inhyrd marknads- och f�rs�ljningspersonal"
#SRU 6860 7513
#KONTO 6870 "Inhyrd restaurang- och butikspersonal"
#SRU 6870 7513
#KONTO 6880 "Inhyrda f�retagsledare"
#SRU 6880 7513
#KONTO 6890 "�vrig inhyrd personal"
#SRU 6890 7513
#KONTO 6900 "�vriga externa kostnader (gruppkonto)"
#SRU 6900 7513
#KONTO 6910 "Licensavgifter och royalties"
#SRU 6910 7513
#KONTO 6920 "Kostnader f�r egna patent"
#SRU 6920 7513
#KONTO 6930 "Kostnader f�r varum�rken m.m."
#SRU 6930 7513
#KONTO 6940 "Kontroll-, provnings- och st�mpelavgifter"
#SRU 6940 7513
#KONTO 6950 "Tillsynsavgifter myndigheter"
#SRU 6950 7513
#KONTO 6970 "Tidningar, tidskrifter och facklitteratur"
#SRU 6970 7513
#KONTO 6980 "F�reningsavgifter"
#SRU 6980 7513
#KONTO 6981 "F�reningsavgifter, avdragsgilla"
#SRU 6981 7513
#KONTO 6982 "F�reningsavgifter, ej avdragsgilla"
#SRU 6982 7513
#KONTO 6990 "�vriga externa kostnader"
#SRU 6990 7513
#KONTO 6991 "�vriga externa kostnader, avdragsgilla"
#SRU 6991 7513
#KONTO 6992 "�vriga externa kostnader, ej avdragsgilla"
#SRU 6992 7513
#KONTO 6993 "L�mnade bidrag och g�vor"
#SRU 6993 7513
#KONTO 6996 "Betald utl�ndsk inkomstskatt"
#SRU 6996 7513
#KONTO 6997 "Obetald utl�ndsk inkomstskatt"
#SRU 6997 7513
#KONTO 6998 "Utl�ndsk moms"
#SRU 6998 7513
#KONTO 6999 "Ing�ende moms, blandad verksamhet"
#SRU 6999 7513
#KONTO 7000 "L�ner till kollektivanst�llda (gruppkonto)"
#SRU 7000 7514
#KONTO 7010 "L�ner till kollektivanst�llda"
#SRU 7010 7514
#KONTO 7011 "L�ner till kollektivanst�llda"
#SRU 7011 7514
#KONTO 7012 "Vinstandelar till kollektivanst�llda"
#SRU 7012 7514
#KONTO 7013 "L�ner till kollektivanst�llda under 26 �r"
#SRU 7013 7514
#KONTO 7014 "L�ner till kollektivanst�llda (nya pensionssystemet)"
#SRU 7014 7514
#KONTO 7015 "L�ner till kollektivanst�llda (avgiftsbefriade)"
#SRU 7015 7514
#KONTO 7016 "Vinstandelar till kollektivanst�llda (avgiftsbefriade)"
#SRU 7016 7514
#KONTO 7017 "Avg�ngsvederlag till kollektivanst�llda"
#SRU 7017 7514
#KONTO 7018 "Bruttol�neavdrag, kollektivanst�llda"
#SRU 7018 7514
#KONTO 7019 "Upplupna l�ner och vinstandelar till kollektivanst�llda"
#SRU 7019 7514
#KONTO 7030 "L�ner till kollektivanst�llda (utlandsanst�llda)"
#SRU 7030 7514
#KONTO 7031 "L�ner till kollektivanst�llda (utlandsanst�llda)"
#SRU 7031 7514
#KONTO 7032 "Vinstandelar till kollektivanst�llda (utlandsanst�llda)"
#SRU 7032 7514
#KONTO 7033 "L�ner till kollektivanst�llda under 26 �r (utlandsanst�llda)"
#SRU 7033 7514
#KONTO 7034 "L�ner till kollektivanst�llda (nya pensionssystemet) (utlandsanst�llda)"
#SRU 7034 7514
#KONTO 7035 "L�ner till kollektivanst�llda (avgiftsbefriade) (utlandsanst�llda)"
#SRU 7035 7514
#KONTO 7036 "Vinstandelar till kollektivanst�llda (avgiftsbefriade) (utlandsanst�llda)"
#SRU 7036 7514
#KONTO 7037 "Avg�ngsvederlag till kollektivanst�llda (utlandsanst�llda)"
#SRU 7037 7514
#KONTO 7038 "Bruttol�neavdrag, kollektivanst�llda (utlandsanst�llda)"
#SRU 7038 7514
#KONTO 7039 "Upplupna l�ner och vinstandelar till kollektivanst�llda (utlandsanst�llda)"
#SRU 7039 7514
#KONTO 7080 "L�ner till kollektivanst�llda f�r ej arbetad tid"
#SRU 7080 7514
#KONTO 7081 "Sjukl�ner till kollektivanst�llda"
#SRU 7081 7514
#KONTO 7082 "Semesterl�ner till kollektivanst�llda"
#SRU 7082 7514
#KONTO 7083 "F�r�ldraers�ttning till kollektivanst�llda"
#SRU 7083 7514
#KONTO 7090 "F�r�ndring av semesterl�neskuld"
#SRU 7090 7514
#KONTO 7200 "L�ner till tj�nstem�n och f�retagsledare (gruppkonto)"
#SRU 7200 7514
#KONTO 7210 "L�ner till tj�nstem�n"
#SRU 7210 7514
#KONTO 7211 "L�ner till tj�nstem�n"
#SRU 7211 7514
#KONTO 7212 "Vinstandelar till tj�nstem�n"
#SRU 7212 7514
#KONTO 7213 "L�ner till tj�nstem�n under 26 �r"
#SRU 7213 7514
#KONTO 7214 "L�ner till tj�nstem�n (nya pensionssystemet)"
#SRU 7214 7514
#KONTO 7215 "L�ner till tj�nstem�n (avgiftsbefriade)"
#SRU 7215 7514
#KONTO 7216 "Vinstandelar till tj�nstem�n (avgiftsbefriade)"
#SRU 7216 7514
#KONTO 7217 "Avg�ngsvederlag till tj�nstem�n"
#SRU 7217 7514
#KONTO 7218 "Bruttol�neavdrag, tj�nstem�n"
#SRU 7218 7514
#KONTO 7219 "Upplupna l�ner och vinstandelar till tj�nstem�n"
#SRU 7219 7514
#KONTO 7220 "L�ner till f�retagsledare"
#SRU 7220 7514
#KONTO 7221 "L�ner till f�retagsledare"
#SRU 7221 7514
#KONTO 7222 "Tantiem till f�retagsledare"
#SRU 7222 7514
#KONTO 7223 "L�ner till f�retagsledare under 26 �r"
#SRU 7223 7514
#KONTO 7224 "L�ner till f�retagsledare (nya pensionssystemet)"
#SRU 7224 7514
#KONTO 7225 "L�ner till f�retagsledare (avgiftsbefriade)"
#SRU 7225 7514
#KONTO 7227 "Avg�ngsvederlag till f�retagsledare"
#SRU 7227 7514
#KONTO 7228 "Bruttol�neavdrag, f�retagsledare"
#SRU 7228 7514
#KONTO 7229 "Upplupna l�ner och tantiem till f�retagsledare"
#SRU 7229 7514
#KONTO 7230 "L�ner till tj�nstem�n och ftgsledare (utlandsanst�llda)"
#SRU 7230 7514
#KONTO 7231 "L�ner till tj�nstem�n och ftgsledare (utlandsanst�llda)"
#SRU 7231 7514
#KONTO 7232 "Vinstandelar till tj�nstem�n och ftgsledare (utlandsanst�llda)"
#SRU 7232 7514
#KONTO 7233 "L�ner till tj�nstem�n och ftgsledare under 26 �r (utlandsanst�llda)"
#SRU 7233 7514
#KONTO 7234 "L�ner till tj�nstem�n och ftgsledare (utlandsanst�llda) (nya pensionssystemet)"
#SRU 7234 7514
#KONTO 7235 "L�ner till tj�nstem�n och ftgsledare (utlandsanst�llda) (avgiftsbefriade)"
#SRU 7235 7514
#KONTO 7236 "Vinstandelar till tj�nstem�n och ftgsledare (utlandsanst�llda) (avgiftsbefriade)"
#SRU 7236 7514
#KONTO 7237 "Avg�ngsvederlag till tj�nstem�n och ftgsledare (utlandsanst�llda)"
#SRU 7237 7514
#KONTO 7238 "Bruttol�neavdrag, tj�nstem�n och ftgsledare (utlandsanst�llda)"
#SRU 7238 7514
#KONTO 7239 "Upplupna l�ner och vinstandelar till tj�nstem�n och ftgsledare (utlandsanst�llda)"
#SRU 7239 7514
#KONTO 7240 "Styrelsearvoden"
#SRU 7240 7514
#KONTO 7280 "L�ner till tj�nstem�n och f�retagsledare f�r ej arbetad tid"
#SRU 7280 7514
#KONTO 7281 "Sjukl�ner till tj�nstem�n"
#SRU 7281 7514
#KONTO 7282 "Sjukl�ner till f�retagsledare"
#SRU 7282 7514
#KONTO 7283 "F�r�ldraers�ttning till tj�nstem�n"
#SRU 7283 7514
#KONTO 7284 "F�r�ldraers�ttning till f�retagsledare"
#SRU 7284 7514
#KONTO 7285 "Semesterl�ner till tj�nstem�n"
#SRU 7285 7514
#KONTO 7286 "Semesterl�ner till f�retagsledare"
#SRU 7286 7514
#KONTO 7288 "�vriga l�ner till tj�nstem�n f�r ej arbetad tid"
#SRU 7288 7514
#KONTO 7289 "�vriga l�ner till f�retagsledare f�r ej arbetad tid"
#SRU 7289 7514
#KONTO 7290 "F�r�ndring av semesterl�neskuld"
#SRU 7290 7514
#KONTO 7291 "F�r�ndring av semesterl�neskuld till tj�nstem�n"
#SRU 7291 7514
#KONTO 7292 "F�r�ndring av semesterl�neskuld till f�retagsledare"
#SRU 7292 7514
#KONTO 7300 "Kostnadsers�ttningar och f�rm�ner (gruppkonto)"
#SRU 7300 7514
#KONTO 7310 "Kontanta extraers�ttningar"
#SRU 7310 7514
#KONTO 7311 "Ers�ttningar f�r sammantr�den m.m."
#SRU 7311 7514
#KONTO 7312 "Ers�ttningar f�r f�rslagsverksamhet och uppfinningar"
#SRU 7312 7514
#KONTO 7313 "Ers�ttningar f�r/bidrag till bostadskostnader"
#SRU 7313 7514
#KONTO 7314 "Ers�ttningar f�r/bidrag till m�ltidskostnader"
#SRU 7314 7514
#KONTO 7315 "Ers�ttningar f�r/bidrag till resor till och fr�n arbetsplatsen"
#SRU 7315 7514
#KONTO 7316 "Ers�ttningar f�r/bidrag till arbetskl�der"
#SRU 7316 7514
#KONTO 7317 "Ers�ttningar f�r/bidrag till arbetsmaterial och arbetsverktyg"
#SRU 7317 7514
#KONTO 7318 "Felr�kningspengar"
#SRU 7318 7514
#KONTO 7319 "�vriga kontanta extraers�ttningar"
#SRU 7319 7514
#KONTO 7320 "Traktamenten vid tj�nsteresa"
#SRU 7320 7514
#KONTO 7321 "Skattefria traktamenten, Sverige"
#SRU 7321 7514
#KONTO 7322 "Skattepliktiga traktamenten, Sverige"
#SRU 7322 7514
#KONTO 7323 "Skattefria traktamenten, utlandet"
#SRU 7323 7514
#KONTO 7324 "Skattepliktiga traktamenten, utlandet"
#SRU 7324 7514
#KONTO 7330 "Bilers�ttningar"
#SRU 7330 7514
#KONTO 7331 "Skattefria bilers�ttningar"
#SRU 7331 7514
#KONTO 7332 "Skattepliktiga bilers�ttningar"
#SRU 7332 7514
#KONTO 7333 "Ers�ttning f�r tr�ngselskatt, skattefri"
#SRU 7333 7514
#KONTO 7350 "Ers�ttningar f�r f�reskrivna arbetskl�der"
#SRU 7350 7514
#KONTO 7370 "Representationsers�ttningar"
#SRU 7370 7514
#KONTO 7380 "Kostnader f�r f�rm�ner till anst�llda"
#SRU 7380 7514
#KONTO 7381 "Kostnader f�r fri bostad"
#SRU 7381 7514
#KONTO 7382 "Kostnader f�r fria eller subventionerade m�ltider"
#SRU 7382 7514
#KONTO 7383 "Kostnader f�r fria resor till och fr�n arbetsplatsen"
#SRU 7383 7514
#KONTO 7384 "Kostnader f�r fria eller subventionerade arbetskl�der"
#SRU 7384 7514
#KONTO 7385 "Kostnader f�r fri bil"
#SRU 7385 7514
#KONTO 7386 "Subventionerad r�nta"
#SRU 7386 7514
#KONTO 7387 "Kostnader f�r l�nedatorer"
#SRU 7387 7514
#KONTO 7388 "Anst�lldas ers�ttning f�r erh�llna f�rm�ner"
#SRU 7388 7514
#KONTO 7389 "�vriga kostnader f�r f�rm�ner"
#SRU 7389 7514
#KONTO 7390 "�vriga kostnadsers�ttningar och f�rm�ner"
#SRU 7390 7514
#KONTO 7391 "Kostnad f�r tr�ngselskattef�rm�n"
#SRU 7391 7514
#KONTO 7392 "Kostnad f�r f�rm�n av hush�llsn�ra tj�nster"
#SRU 7392 7514
#KONTO 7399 "Motkonto skattepliktiga f�rm�ner"
#SRU 7399 7514
#KONTO 7400 "Pensionskostnader (gruppkonto)"
#SRU 7400 7514
#KONTO 7410 "Pensionsf�rs�kringspremier"
#SRU 7410 7514
#KONTO 7411 "Premier f�r kollektiva pensionsf�rs�kringar"
#SRU 7411 7514
#KONTO 7412 "Premier f�r individuella pensionsf�rs�kringar"
#SRU 7412 7514
#KONTO 7418 "�terb�ring fr�n f�rs�kringsf�retag"
#SRU 7418 7514
#KONTO 7420 "F�r�ndring av pensionsskuld"
#SRU 7420 7514
#KONTO 7421 "Direktpension, ej avdragsgill"
#SRU 7421 7514
#KONTO 7430 "Avdrag f�r r�ntedel i pensionskostnad"
#SRU 7430 7514
#KONTO 7440 "F�r�ndring av pensionsstiftelsekapital"
#SRU 7440 7514
#KONTO 7441 "Avs�ttning till pensionsstiftelse"
#SRU 7441 7514
#KONTO 7448 "Gottg�relse fr�n pensionsstiftelse"
#SRU 7448 7514
#KONTO 7460 "Pensionsutbetalningar"
#SRU 7460 7514
#KONTO 7461 "Pensionsutbetalningar till f.d. kollektivanst�llda"
#SRU 7461 7514
#KONTO 7462 "Pensionsutbetalningar till f.d. tj�nstem�n"
#SRU 7462 7514
#KONTO 7463 "Pensionsutbetalningar till f.d. f�retagsledare"
#SRU 7463 7514
#KONTO 7470 "F�rvaltnings- och kreditf�rs�kringsavgifter"
#SRU 7470 7514
#KONTO 7490 "�vriga pensionskostnader"
#SRU 7490 7514
#KONTO 7500 "Sociala och andra avgifter enligt lag och avtal (gruppkonto)"
#SRU 7500 7514
#KONTO 7510 "Lagstadgade sociala avgifter"
#SRU 7510 7514
#KONTO 7511 "Sociala avgifter f�r l�ner och ers�ttningar"
#SRU 7511 7514
#KONTO 7512 "Sociala avgifter f�r f�rm�nsv�rden"
#SRU 7512 7514
#KONTO 7515 "Sociala avgifter p� skattepliktiga kostnadsers�ttningar"
#SRU 7515 7514
#KONTO 7516 "Sociala avgifter p� arvoden"
#SRU 7516 7514
#KONTO 7518 "Sociala avgifter p� bruttol�neavdrag m.m."
#SRU 7518 7514
#KONTO 7519 "Sociala avgifter f�r semester- och l�neskulder"
#SRU 7519 7514
#KONTO 7520 "Arbetsgivaravgifter (nya pensionssystemet)"
#SRU 7520 7514
#KONTO 7521 "Arbetsgivaravgifter f�r l�ner och ers�ttningar (nya pensionssystemet)"
#SRU 7521 7514
#KONTO 7522 "Arbetsgivaravgifter f�r f�rm�nsv�rden (nya pensionssystemet)"
#SRU 7522 7514
#KONTO 7525 "Arbetsgivaravgifter p� skattepliktiga kostnadsers�ttningar (nya pensionssystemet)"
#SRU 7525 7514
#KONTO 7526 "Arbetsgivaravgifter p� arvoden (nya pensionssystemet)"
#SRU 7526 7514
#KONTO 7528 "Arbetsgivaravgifter p� bruttol�neavdrag m.m. (nya pensionssystemet)"
#SRU 7528 7514
#KONTO 7529 "Arbetsgivaravgifter f�r semester- och l�neskulder (nya pensionssystemet)"
#SRU 7529 7514
#KONTO 7530 "S�rskild l�neskatt"
#SRU 7530 7514
#KONTO 7531 "S�rskild l�neskatt f�r vissa f�rs�kringsers�ttningar m.m."
#SRU 7531 7514
#KONTO 7532 "S�rskild l�neskatt pensionskostnader, deklarationspost"
#SRU 7532 7514
#KONTO 7533 "S�rskild l�neskatt f�r pensionskostnader"
#SRU 7533 7514
#KONTO 7550 "Avkastningsskatt p� pensionsmedel"
#SRU 7550 7514
#KONTO 7560 "Arbetsgivaravgifter under 26 �r"
#SRU 7560 7514
#KONTO 7570 "Premier f�r arbetsmarknadsf�rs�kringar"
#SRU 7570 7514
#KONTO 7571 "Arbetsmarknadsf�rs�kringar"
#SRU 7571 7514
#KONTO 7572 "Arbetsmarknadsf�rs�kringar pensionsf�rs�kringspremier, deklarationspost"
#SRU 7572 7514
#KONTO 7580 "Gruppf�rs�kringspremier"
#SRU 7580 7514
#KONTO 7581 "Grupplivf�rs�kringspremier"
#SRU 7581 7514
#KONTO 7582 "Gruppsjukf�rs�kringspremier"
#SRU 7582 7514
#KONTO 7583 "Gruppolycksfallsf�rs�kringspremier"
#SRU 7583 7514
#KONTO 7589 "�vriga gruppf�rs�kringspremier"
#SRU 7589 7514
#KONTO 7590 "�vriga sociala och andra avgifter enligt lag och avtal"
#SRU 7590 7514
#KONTO 7600 "�vriga personalkostnader (gruppkonto)"
#SRU 7600 7514
#KONTO 7610 "Utbildning"
#SRU 7610 7514
#KONTO 7620 "Sjuk- och h�lsov�rd"
#SRU 7620 7514
#KONTO 7621 "Sjuk- och h�lsov�rd, avdragsgill"
#SRU 7621 7514
#KONTO 7622 "Sjuk- och h�lsov�rd, ej avdragsgill"
#SRU 7622 7514
#KONTO 7623 "Sjukv�rdsf�rs�kring, ej avdragsgill"
#SRU 7623 7514
#KONTO 7630 "Personalrepresentation"
#SRU 7630 7514
#KONTO 7631 "Personalrepresentation, avdragsgill"
#SRU 7631 7514
#KONTO 7632 "Personalrepresentation, ej avdragsgill"
#SRU 7632 7514
#KONTO 7650 "Sjukl�nef�rs�kring"
#SRU 7650 7514
#KONTO 7670 "F�r�ndring av personalstiftelsekapital"
#SRU 7670 7514
#KONTO 7671 "Avs�ttning till personalstiftelse"
#SRU 7671 7514
#KONTO 7678 "Gottg�relse fr�n personalstiftelse"
#SRU 7678 7514
#KONTO 7690 "�vriga personalkostnader"
#SRU 7690 7514
#KONTO 7691 "Personalrekrytering"
#SRU 7691 7514
#KONTO 7692 "Begravningshj�lp"
#SRU 7692 7514
#KONTO 7693 "Fritidsverksamhet"
#SRU 7693 7514
#KONTO 7699 "�vriga personalkostnader"
#SRU 7699 7514
#KONTO 7710 "Nedskrivningar av immateriella anl�ggningstillg�ngar"
#SRU 7710 7515
#KONTO 7720 "Nedskrivningar av byggnader och mark"
#SRU 7720 7515
#KONTO 7730 "Nedskrivningar av maskiner och inventarier"
#SRU 7730 7515
#KONTO 7740 "Nedskrivningar av vissa oms�ttningstillg�ngar"
#SRU 7740 7516
#KONTO 7760 "�terf�ring av nedskrivningar av immateriella anl�ggningstillg�ngar"
#SRU 7760 7515
#KONTO 7770 "�terf�ring av nedskrivningar av byggnader och mark"
#SRU 7770 7515
#KONTO 7780 "�terf�ring av nedskrivningar av maskiner och inventarier"
#SRU 7780 7515
#KONTO 7790 "�terf�ring av nedskrivningar av vissa oms�ttningstillg�ngar"
#SRU 7790 7516
#KONTO 7810 "Avskrivningar p� immateriella anl�ggningstillg�ngar"
#SRU 7810 7515
#KONTO 7811 "Avskrivningar p� balanserade utgifter"
#SRU 7811 7515
#KONTO 7812 "Avskrivningar p� koncessioner m.m."
#SRU 7812 7515
#KONTO 7813 "Avskrivningar p� patent"
#SRU 7813 7515
#KONTO 7814 "Avskrivningar p� licenser"
#SRU 7814 7515
#KONTO 7815 "Avskrivningar p� varum�rken"
#SRU 7815 7515
#KONTO 7816 "Avskrivningar p� hyresr�tter"
#SRU 7816 7515
#KONTO 7817 "Avskrivningar p� goodwill"
#SRU 7817 7515
#KONTO 7819 "Avskrivningar p� �vriga immateriella anl�ggningstillg�ngar"
#SRU 7819 7515
#KONTO 7820 "Avskrivningar p� byggnader och markanl�ggningar"
#SRU 7820 7515
#KONTO 7821 "Avskrivningar p� byggnader"
#SRU 7821 7515
#KONTO 7824 "Avskrivningar p� markanl�ggningar"
#SRU 7824 7515
#KONTO 7829 "Avskrivningar p� �vriga byggnader"
#SRU 7829 7515
#KONTO 7830 "Avskrivningar p� maskiner och inventarier"
#SRU 7830 7515
#KONTO 7831 "Avskrivningar p� maskiner och andra tekniska anl�ggningar"
#SRU 7831 7515
#KONTO 7832 "Avskrivningar p� inventarier och verktyg"
#SRU 7832 7515
#KONTO 7833 "Avskrivningar p� installationer"
#SRU 7833 7515
#KONTO 7834 "Avskrivningar p� bilar och andra transportmedel"
#SRU 7834 7515
#KONTO 7835 "Avskrivningar p� datorer"
#SRU 7835 7515
#KONTO 7836 "Avskrivningar p� leasade tillg�ngar"
#SRU 7836 7515
#KONTO 7839 "Avskrivningar p� �vriga maskiner och inventarier"
#SRU 7839 7515
#KONTO 7840 "Avskrivningar p� f�rb�ttringsutgifter p� annans fastighet"
#SRU 7840 7515
#KONTO 7940 "Orealiserade positiva/negativa v�rdef�r�ndringar p� s�kringsinstrument"
#SRU 7940 7517
#KONTO 7960 "Valutakursf�rluster p� fordringar och skulder av r�relsekarakt�r"
#SRU 7960 7517
#KONTO 7970 "F�rlust vid avyttring av immateriella och materiella anl�ggningstillg�ngar"
#SRU 7970 7517
#KONTO 7971 "F�rlust vid avyttring av immateriella anl�ggningstillg�ngar"
#SRU 7971 7517
#KONTO 7972 "F�rlust vid avyttring av byggnader och mark"
#SRU 7972 7517
#KONTO 7973 "F�rlust vid avyttring av maskiner och inventarier"
#SRU 7973 7517
#KONTO 7990 "�vriga r�relsekostnader"
#SRU 7990 7517
#KONTO 8010 "Utdelning p� andelar i koncernf�retag"
#SRU 8010 7414
#KONTO 8012 "Utdelning p� andelar i dotterf�retag"
#SRU 8012 7414
#KONTO 8013 "Utdelning p� andelar i andra koncernf�retag"
#SRU 8013 7414
#KONTO 8014 "Koncernbidrag"
#SRU 8014 7414
#KONTO 8016 "Insatsemission, koncernf�retag"
#SRU 8016 7414
#KONTO 8019 "�vriga utdelningar p� andelar i koncernf�retag"
#SRU 8019 7414
#KONTO 8020 "Resultat vid f�rs�ljning av andelar i koncernf�retag"
#SRU 8020 7414
#KONTO 8022 "Resultat vid f�rs�ljning av andelar i dotterf�retag"
#SRU 8022 7414
#KONTO 8023 "Resultat vid f�rs�ljning av andelar i andra koncernf�retag"
#SRU 8023 7414
#KONTO 8030 "Resultatandelar fr�n handelsbolag (dotterf�retag)"
#SRU 8030 7414
#KONTO 8070 "Nedskrivningar av andelar i och l�ngfristiga fordringar hos koncernf�retag"
#SRU 8070 7521
#KONTO 8072 "Nedskrivningar av andelar i dotterf�retag"
#SRU 8072 7521
#KONTO 8073 "Nedskrivningar av andelar i andra koncernf�retag"
#SRU 8073 7521
#KONTO 8076 "Nedskrivningar av l�ngfristiga fordringar hos moderf�retag"
#SRU 8076 7521
#KONTO 8077 "Nedskrivningar av l�ngfristiga fordringar hos dotterf�retag"
#SRU 8077 7521
#KONTO 8078 "Nedskrivningar av l�ngfristiga fordringar hos andra koncernf�retag"
#SRU 8078 7521
#KONTO 8080 "�terf�ringar av nedskrivningar av andelar i och l�ngfristiga fordringar hos koncernf�retag"
#SRU 8080 7521
#KONTO 8082 "�terf�ringar av nedskrivningar av andelar i dotterf�retag"
#SRU 8082 7521
#KONTO 8083 "�terf�ringar av nedskrivningar av andelar i andra koncernf�retag"
#SRU 8083 7521
#KONTO 8086 "�terf�ringar av nedskrivningar av l�ngfristiga fordringar hos moderf�retag"
#SRU 8086 7521
#KONTO 8087 "�terf�ringar av nedskrivningar av l�ngfristiga fordringar hos dotterf�retag"
#SRU 8087 7521
#KONTO 8088 "�terf�ringar av nedskrivningar av l�ngfristiga fordringar hos andra koncernf�retag"
#SRU 8088 7521
#KONTO 8110 "Utdelning p� andelar i intressef�retag"
#SRU 8110 7415
#KONTO 8112 "Utdelningar fr�n intressef�retag"
#SRU 8112 7415
#KONTO 8116 "Insatsemission, intressef�retag"
#SRU 8116 7415
#KONTO 8120 "Resultat vid f�rs�ljning av andelar i intressef�retag"
#SRU 8120 7415
#KONTO 8130 "Resultatandelar fr�n handelsbolag (intressef�retag)"
#SRU 8130 7415
#KONTO 8170 "Nedskrivningar av andelar i och l�ngfristiga fordringar hos intressef�retag"
#SRU 8170 7521
#KONTO 8171 "Nedskrivningar av andelar i intressef�retag"
#SRU 8171 7521
#KONTO 8172 "Nedskrivningar av l�ngfristiga fordringar hos intressef�retag"
#SRU 8172 7521
#KONTO 8180 "�terf�ringar av nedskrivningar av andelar i och l�ngfristiga fordringar hos intressef�retag"
#SRU 8180 7521
#KONTO 8181 "�terf�ringar av nedskrivningar av andelar i intressef�retag"
#SRU 8181 7521
#KONTO 8182 "�terf�ringar av nedskrivningar av l�ngfristiga fordringar hos intressef�retag"
#SRU 8182 7521
#KONTO 8210 "Utdelningar p� andelar i andra f�retag"
#SRU 8210 7416
#KONTO 8212 "Utdelningar, �vriga f�retag"
#SRU 8212 7416
#KONTO 8216 "Insatsemissioner, �vriga f�retag"
#SRU 8216 7416
#KONTO 8220 "Resultat vid f�rs�ljning av v�rdepapper i och l�ngfristiga fordringar hos andra f�retag"
#SRU 8220 7416
#KONTO 8221 "Resultat vid f�rs�ljning av andelar i andra f�retag"
#SRU 8221 7416
#KONTO 8222 "Resultat vid f�rs�ljning av l�ngfristiga fordringar hos andra f�retag"
#SRU 8222 7416
#KONTO 8223 "Resultat vid f�rs�ljning av derivat (l�ngfristiga v�rdepappersinnehav)"
#SRU 8223 7416
#KONTO 8228 "V�rdef�r�ndring kapitalf�rs�kring, skattem�ssig justering"
#SRU 8228 7416
#KONTO 8230 "Valutakursdifferenser p� l�ngfristiga fordringar"
#SRU 8230 7416
#KONTO 8231 "Valutakursvinster p� l�ngfristiga fordringar"
#SRU 8231 7416
#KONTO 8236 "Valutakursf�rluster p� l�ngfristiga fordringar"
#SRU 8236 7416
#KONTO 8240 "Resultatandelar fr�n handelsbolag (andra f�retag)"
#SRU 8240 7416
#KONTO 8250 "R�nteint�kter fr�n l�ngfristiga fordringar hos och v�rdepapper i andra f�retag"
#SRU 8250 7416
#KONTO 8251 "R�nteint�kter fr�n l�ngfristiga fordringar"
#SRU 8251 7416
#KONTO 8252 "R�nteint�kter fr�n �vriga v�rdepapper"
#SRU 8252 7416
#KONTO 8254 "Skattefria r�nteint�kter, l�ngfristiga tillg�ngar"
#SRU 8254 7416
#KONTO 8260 "R�nteint�kter fr�n l�ngfristiga fordringar hos koncernf�retag"
#SRU 8260 7416
#KONTO 8261 "R�nteint�kter fr�n l�ngfristiga fordringar hos moderf�retag"
#SRU 8261 7416
#KONTO 8262 "R�nteint�kter fr�n l�ngfristiga fordringar hos dotterf�retag"
#SRU 8262 7416
#KONTO 8263 "R�nteint�kter fr�n l�ngfristiga fordringar hos andra koncernf�retag"
#SRU 8263 7416
#KONTO 8270 "Nedskrivningar av innehav av andelar i och l�ngfristiga fordringar hos andra f�retag"
#SRU 8270 7521
#KONTO 8271 "Nedskrivningar av andelar i andra f�retag"
#SRU 8271 7521
#KONTO 8272 "Nedskrivningar av l�ngfristiga fordringar hos andra f�retag"
#SRU 8272 7521
#KONTO 8273 "Nedskrivningar av �vriga v�rdepapper hos andra f�retag"
#SRU 8273 7521
#KONTO 8280 "�terf�ringar av nedskrivningar av andelar i och l�ngfristiga fordringar hos andra f�retag"
#SRU 8280 7521
#KONTO 8281 "�terf�ringar av nedskrivningar av andelar i andra f�retag"
#SRU 8281 7521
#KONTO 8282 "�terf�ringar av nedskrivningar av l�ngfristiga fordringar hos andra f�retag"
#SRU 8282 7521
#KONTO 8283 "�terf�ringar av nedskrivningar av �vriga v�rdepapper i andra f�retag"
#SRU 8283 7521
#KONTO 8290 "V�rdering till verkligt v�rde, anl�ggningstillg�ngar"
#SRU 8290 7416
#KONTO 8291 "Orealiserade v�rdef�r�ndringar p� anl�ggningstillg�ngar"
#SRU 8291 7416
#KONTO 8295 "Orealiserade v�rdef�r�ndringar p� derivatinstrument"
#SRU 8295 7416
#KONTO 8310 "R�nteint�kter fr�n oms�ttningstillg�ngar"
#SRU 8310 7417
#KONTO 8311 "R�nteint�kter fr�n bank"
#SRU 8311 7417
#KONTO 8312 "R�nteint�kter fr�n kortfristiga placeringar"
#SRU 8312 7417
#KONTO 8313 "R�nteint�kter fr�n kortfristiga fordringar"
#SRU 8313 7417
#KONTO 8314 "Skattefria r�nteint�kter"
#SRU 8314 7417
#KONTO 8317 "R�nteint�kter f�r dold r�ntekompensation"
#SRU 8317 7417
#KONTO 8319 "�vriga r�nteint�kter fr�n oms�ttningstillg�ngar"
#SRU 8319 7417
#KONTO 8320 "V�rdering till verkligt v�rde, oms�ttningstillg�ngar"
#SRU 8320 7417
#KONTO 8321 "Orealiserade v�rdef�r�ndringar p� oms�ttningstillg�ngar"
#SRU 8321 7417
#KONTO 8325 "Orealiserade v�rdef�r�ndringar p� derivatinstrument (oms.-tillg.)"
#SRU 8325 7417
#KONTO 8330 "Valutakursdifferenser p� kortfristiga fordringar och placeringar"
#SRU 8330 7417
#KONTO 8331 "Valutakursvinster p� kortfristiga fordringar och placeringar"
#SRU 8331 7417
#KONTO 8336 "Valutakursf�rluster p� kortfristiga fordringar och placeringar"
#SRU 8336 7417
#KONTO 8340 "Utdelningar p� kortfristiga placeringar"
#SRU 8340 7417
#KONTO 8350 "Resultat vid f�rs�ljning av kortfristiga placeringar"
#SRU 8350 7417
#KONTO 8360 "�vriga r�nteint�kter fr�n koncernf�retag"
#SRU 8360 7417
#KONTO 8361 "�vriga r�nteint�kter fr�n moderf�retag"
#SRU 8361 7417
#KONTO 8362 "�vriga r�nteint�kter fr�n dotterf�retag"
#SRU 8362 7417
#KONTO 8363 "�vriga r�nteint�kter fr�n andra koncernf�retag"
#SRU 8363 7417
#KONTO 8370 "Nedskrivningar av kortfristiga placeringar"
#SRU 8370 7521
#KONTO 8380 "�terf�ringar av nedskrivningar av kortfristiga placeringar"
#SRU 8380 7521
#KONTO 8390 "�vriga finansiella int�kter"
#SRU 8390 7417
#KONTO 8398 "V�rdef�r�ndring kortfristig placering, skattem�ssig justering"
#SRU 8398 7417
#KONTO 8400 "R�ntekostnader (gruppkonto)"
#SRU 8400 7522
#KONTO 8410 "R�ntekostnader f�r l�ngfristiga skulder"
#SRU 8410 7522
#KONTO 8411 "R�ntekostnader f�r obligations-, f�rlags- och konvertibla l�n"
#SRU 8411 7522
#KONTO 8412 "R�ntedel i �rets pensionskostnad"
#SRU 8412 7522
#KONTO 8413 "R�ntekostnader f�r checkr�kningskredit"
#SRU 8413 7522
#KONTO 8414 "R�ntekostnader f�r byggnadskreditiv"
#SRU 8414 7522
#KONTO 8415 "R�ntekostnader f�r andra skulder till kreditinstitut"
#SRU 8415 7522
#KONTO 8417 "R�ntekostnader f�r dold r�ntekompensation m.m."
#SRU 8417 7522
#KONTO 8418 "Avdragspost f�r r�ntesubventioner"
#SRU 8418 7522
#KONTO 8419 "�vriga r�ntekostnader f�r l�ngfristiga skulder"
#SRU 8419 7522
#KONTO 8420 "R�ntekostnader f�r kortfristiga skulder"
#SRU 8420 7522
#KONTO 8421 "R�ntekostnader till kreditinstitut"
#SRU 8421 7522
#KONTO 8422 "Dr�jsm�lsr�ntor f�r leverant�rsskulder"
#SRU 8422 7522
#KONTO 8423 "R�ntekostnader f�r skatter och avgifter"
#SRU 8423 7522
#KONTO 8429 "�vriga r�ntekostnader f�r kortfristiga skulder"
#SRU 8429 7522
#KONTO 8430 "Valutakursdifferenser p� skulder"
#SRU 8430 7522
#KONTO 8431 "Valutakursvinster p� skulder"
#SRU 8431 7522
#KONTO 8436 "Valutakursf�rluster p� skulder"
#SRU 8436 7522
#KONTO 8440 "Erh�llna r�ntebidrag"
#SRU 8440 7522
#KONTO 8450 "Orealiserade v�rdef�r�ndringar p� skulder"
#SRU 8450 7522
#KONTO 8451 "Orealiserade v�rdef�r�ndringar p� skulder"
#SRU 8451 7522
#KONTO 8455 "Orealiserade v�rdef�r�ndringar p� s�kringsinstrument"
#SRU 8455 7522
#KONTO 8460 "R�ntekostnader till koncernf�retag"
#SRU 8460 7522
#KONTO 8461 "R�ntekostnader till moderf�retag"
#SRU 8461 7522
#KONTO 8462 "R�ntekostnader till dotterf�retag"
#SRU 8462 7522
#KONTO 8463 "R�ntekostnader till andra koncernf�retag"
#SRU 8463 7522
#KONTO 8480 "Aktiverade r�nteutgifter"
#SRU 8480 7522
#KONTO 8490 "�vriga skuldrelaterade poster"
#SRU 8490 7522
#KONTO 8491 "Erh�llet ackord p� skulder till kreditinstitut m.m."
#SRU 8491 7522
#KONTO 8710 "Extraordin�ra int�kter"
#KONTO 8750 "Extraordin�ra kostnader"
#KONTO 8810 "F�r�ndring av periodiseringsfond"
#SRU 8810 7525
#KONTO 8811 "Avs�ttning till periodiseringsfond"
#SRU 8811 7525
#KONTO 8819 "�terf�ring fr�n periodiseringsfond"
#SRU 8819 7525
#KONTO 8820 "Mottagna koncernbidrag"
#SRU 8820 7419
#KONTO 8830 "L�mnade koncernbidrag"
#SRU 8830 7524
#KONTO 8840 "L�mnade gottg�relser"
#SRU 8840 7422
#KONTO 8850 "F�r�ndring av �veravskrivningar"
#SRU 8850 7421
#KONTO 8851 "F�r�ndring av �veravskrivningar, immateriella anl�ggningstillg�ngar"
#SRU 8851 7421
#KONTO 8852 "F�r�ndring av �veravskrivningar, byggnader och markanl�ggningar"
#SRU 8852 7421
#KONTO 8853 "F�r�ndring av �veravskrivningar, maskiner och inventarier"
#SRU 8853 7421
#KONTO 8860 "F�r�ndring av ers�ttningsfond"
#SRU 8860 7422
#KONTO 8861 "Avs�ttning till ers�ttningsfond f�r inventarier"
#SRU 8861 7422
#KONTO 8862 "Avs�ttning till ers�ttningsfond f�r byggnader och markanl�ggningar"
#SRU 8862 7422
#KONTO 8863 "Avs�ttning till ers�ttningsfond f�r mark"
#SRU 8863 7422
#KONTO 8864 "Avs�ttning till ers�ttningsfond f�r djurlager i jordbruk och rensk�tsel"
#SRU 8864 7422
#KONTO 8865 "Ianspr�ktagande av ers�ttningsfond f�r avskrivningar"
#SRU 8865 7422
#KONTO 8866 "Ianspr�ktagande av ers�ttningsfond f�r annat �n avskrivningar"
#SRU 8866 7422
#KONTO 8869 "�terf�ring fr�n ers�ttningsfond"
#SRU 8869 7422
#KONTO 8880 "F�r�ndring av obeskattade int�kter"
#SRU 8880 7422
#KONTO 8881 "Avs�ttning till upphovsmannakonto"
#SRU 8881 7422
#KONTO 8882 "�terf�ring fr�n upphovsmannakonto"
#SRU 8882 7422
#KONTO 8885 "Avs�ttning till skogskonto"
#SRU 8885 7422
#KONTO 8886 "�terf�ring fr�n skogskonto"
#SRU 8886 7422
#KONTO 8890 "�vriga bokslutsdispositioner"
#SRU 8890 7422
#KONTO 8891 "F�r�ndring av skillnad mellan bokf�rd och faktisk pensionsskuld"
#SRU 8891 7422
#KONTO 8892 "Nedskrivningar av konsolideringskarakt�r av anl�ggningstillg�ngar"
#SRU 8892 7422
#KONTO 8896 "F�r�ndring av lagerreserv"
#SRU 8896 7422
#KONTO 8899 "�vriga bokslutsdispositioner"
#SRU 8899 7422
#KONTO 8910 "Skatt som belastar �rets resultat"
#SRU 8910 7528
#KONTO 8920 "Skatt p� grund av �ndrad beskattning"
#SRU 8920 7528
#KONTO 8930 "Restituerad skatt"
#SRU 8930 7528
#KONTO 8940 "Uppskjuten skatt"
#SRU 8940 7528
#KONTO 8980 "�vriga skatter"
#SRU 8980 7528
#KONTO 8990 "Resultat"
#SRU 8990 7450
#KONTO 8999 "�rets resultat"
#SRU 8999 7450
#IB -1 1310 19000.00
#IB 0 1310 19000.00
#IB -2 1352 8000.00
#IB -1 1352 0.00
#IB 0 1352 0.00
#IB -2 1370 0.00
#IB -1 1370 0.00
#IB 0 1370 0.00
#IB -5 1630 0.00
#IB -4 1630 5721.00
#IB -3 1630 11039.00
#IB -2 1630 0.00
#IB -1 1630 0.00
#IB 0 1630 -7578.00
#IB -2 1650 0.00
#IB -1 1650 7578.00
#IB 0 1650 7578.00
#IB -5 1760 0.00
#IB -4 1760 120.00
#IB -3 1760 0.00
#IB -2 1760 0.00
#IB -1 1760 0.00
#IB 0 1760 0.00
#IB -2 1910 0.00
#IB -1 1910 0.00
#IB 0 1910 0.00
#IB -5 1930 0.00
#IB -4 1930 113427.58
#IB -3 1930 13895.44
#IB -2 1930 43999.04
#IB -1 1930 3636.55
#IB 0 1930 78788.45
#IB -5 1971 0.00
#IB -4 1971 65251.00
#IB -3 1971 0.00
#IB -2 1971 0.00
#IB -1 1971 0.00
#IB 0 1971 0.00
#IB -5 2010 0.00
#IB -4 2010 -1218.00
#IB -3 2010 -1218.00
#IB -2 2010 -1218.00
#IB -1 2010 -1218.00
#IB 0 2010 -1218.00
#IB -5 2081 0.00
#IB -4 2081 -50000.00
#IB -3 2081 -50000.00
#IB -2 2081 -50000.00
#IB -1 2081 -50000.00
#IB 0 2081 -50000.00
#IB -3 2091 -13547.44
#IB -2 2091 -19853.44
#IB -1 2091 -19853.44
#IB 0 2091 -19853.44
#IB -1 2093 -19000.00
#IB 0 2093 -19000.00
#IB -3 2098 0.00
#IB -2 2098 0.00
#IB -1 2098 29574.82
#IB 0 2098 82856.89
#IB -5 2099 0.00
#IB -4 2099 0.00
#IB -3 2099 -6305.94
#IB -2 2099 29574.82
#IB -1 2099 53282.07
#IB 0 2099 -79956.40
#IB -2 2393 0.00
#IB -1 2393 -23000.00
#IB 0 2393 0.00
#IB -2 2510 0.00
#IB -1 2510 0.00
#IB 0 2510 0.00
#IB -2 2512 0.00
#IB -1 2512 0.00
#IB 0 2512 -4750.00
#IB -5 2518 0.00
#IB -4 2518 15710.00
#IB -3 2518 38643.00
#IB -2 2518 0.00
#IB -1 2518 0.00
#IB 0 2518 0.00
#IB -5 2610 0.00
#IB -4 2610 0.00
#IB -3 2610 13050.00
#IB -2 2610 13050.00
#IB -1 2610 0.00
#IB 0 2610 0.00
#IB -5 2614 0.00
#IB -4 2614 0.00
#IB -3 2614 0.00
#IB -2 2614 0.00
#IB -1 2614 0.00
#IB 0 2614 0.00
#IB -5 2640 0.00
#IB -4 2640 0.00
#IB -3 2640 79.08
#IB -2 2640 79.08
#IB -1 2640 0.00
#IB 0 2640 0.00
#IB -5 2645 0.00
#IB -4 2645 0.00
#IB -3 2645 0.00
#IB -2 2645 0.00
#IB -1 2645 0.00
#IB 0 2645 0.00
#IB -5 2650 0.00
#IB -4 2650 -27547.00
#IB -3 2650 -3055.00
#IB -2 2650 -23631.00
#IB -1 2650 0.00
#IB 0 2650 -5868.00
#IB -5 2710 0.00
#IB -4 2710 -1260.00
#IB -3 2710 -1260.00
#IB -2 2710 0.00
#IB -1 2710 0.00
#IB 0 2710 0.00
#IB -5 2730 0.00
#IB -4 2730 -1319.64
#IB -3 2730 -1319.64
#IB -2 2730 0.00
#IB -1 2730 0.00
#IB 0 2730 0.00
#IB -2 2820 0.00
#IB -1 2820 0.00
#IB 0 2820 0.00
#IB -2 2822 0.00
#IB -1 2822 0.00
#IB 0 2822 0.00
#IB -2 2829 0.00
#IB -1 2829 0.00
#IB 0 2829 0.00
#IB -2 2893 0.00
#IB -1 2893 0.00
#IB 0 2893 0.00
#IB -5 2898 0.00
#IB -4 2898 -103547.44
#IB -3 2898 0.00
#IB -2 2898 0.00
#IB -1 2898 0.00
#IB 0 2898 0.00
#IB -5 2913 0.00
#IB -4 2913 -15337.50
#IB -3 2913 -0.50
#IB -2 2913 -0.50
#IB -1 2913 0.00
#IB 0 2913 0.00
#UB -2 1310 19000.00
#UB -1 1310 19000.00
#UB 0 1310 6250.00
#UB 0 1318 -6250.00
#UB -3 1352 8000.00
#UB -2 1352 0.00
#UB -1 1352 0.00
#UB 0 1352 175485.98
#UB -3 1370 0.00
#UB -2 1370 0.00
#UB -1 1370 0.00
#UB 0 1370 0.00
#UB -5 1630 5721.00
#UB -4 1630 11039.00
#UB -3 1630 0.00
#UB -2 1630 0.00
#UB -1 1630 -7578.00
#UB 0 1630 53.00
#UB -3 1650 0.00
#UB -2 1650 7578.00
#UB -1 1650 7578.00
#UB 0 1650 2141.00
#UB -5 1760 120.00
#UB -4 1760 0.00
#UB -3 1760 0.00
#UB -2 1760 0.00
#UB -1 1760 0.00
#UB 0 1760 0.00
#UB -3 1910 0.00
#UB -2 1910 0.00
#UB -1 1910 0.00
#UB 0 1910 0.00
#UB -5 1930 113427.58
#UB -4 1930 13895.44
#UB -3 1930 43999.04
#UB -2 1930 3636.55
#UB -1 1930 78788.45
#UB 0 1930 48752.43
#UB -5 1971 65251.00
#UB -4 1971 0.00
#UB -3 1971 0.00
#UB -2 1971 0.00
#UB -1 1971 0.00
#UB 0 1971 0.00
#UB -5 2010 -1218.00
#UB -4 2010 -1218.00
#UB -3 2010 -1218.00
#UB -2 2010 -1218.00
#UB -1 2010 -1218.00
#UB 0 2010 0.00
#UB -5 2081 -50000.00
#UB -4 2081 -50000.00
#UB -3 2081 -50000.00
#UB -2 2081 -50000.00
#UB -1 2081 -50000.00
#UB 0 2081 -50000.00
#UB -4 2091 -13547.44
#UB -3 2091 -19853.44
#UB -2 2091 -19853.44
#UB -1 2091 -19853.44
#UB 0 2091 -16952.95
#UB -2 2093 -19000.00
#UB -1 2093 -19000.00
#UB 0 2093 -160750.00
#UB -4 2098 0.00
#UB -3 2098 0.00
#UB -2 2098 29574.82
#UB -1 2098 82856.89
#UB 0 2098 0.00
#UB -5 2099 0.00
#UB -4 2099 -6305.94
#UB -3 2099 29574.82
#UB -2 2099 53282.07
#UB -1 2099 -79956.40
#UB 0 2099 7238.00
#UB -3 2393 0.00
#UB -2 2393 -23000.00
#UB -1 2393 0.00
#UB 0 2393 0.00
#UB -3 2510 0.00
#UB -2 2510 0.00
#UB -1 2510 0.00
#UB 0 2510 0.00
#UB -3 2512 0.00
#UB -2 2512 0.00
#UB -1 2512 -4750.00
#UB 0 2512 -4750.00
#UB -5 2518 15710.00
#UB -4 2518 38643.00
#UB -3 2518 0.00
#UB -2 2518 0.00
#UB -1 2518 0.00
#UB 0 2518 0.00
#UB -5 2610 0.00
#UB -4 2610 13050.00
#UB -3 2610 13050.00
#UB -2 2610 0.00
#UB -1 2610 0.00
#UB 0 2610 0.00
#UB -5 2614 0.00
#UB -4 2614 0.00
#UB -3 2614 0.00
#UB -2 2614 0.00
#UB -1 2614 0.00
#UB 0 2614 0.00
#UB -5 2640 0.00
#UB -4 2640 79.08
#UB -3 2640 79.08
#UB -2 2640 0.00
#UB -1 2640 0.00
#UB 0 2640 0.00
#UB -5 2645 0.00
#UB -4 2645 0.00
#UB -3 2645 0.00
#UB -2 2645 0.00
#UB -1 2645 0.00
#UB 0 2645 0.00
#UB -5 2650 -27547.00
#UB -4 2650 -3055.00
#UB -3 2650 -23631.00
#UB -2 2650 0.00
#UB -1 2650 -5868.00
#UB 0 2650 0.00
#UB -5 2710 -1260.00
#UB -4 2710 -1260.00
#UB -3 2710 0.00
#UB -2 2710 0.00
#UB -1 2710 0.00
#UB 0 2710 0.00
#UB -5 2730 -1319.64
#UB -4 2730 -1319.64
#UB -3 2730 0.00
#UB -2 2730 0.00
#UB -1 2730 0.00
#UB 0 2730 0.00
#UB -3 2820 0.00
#UB -2 2820 0.00
#UB -1 2820 0.00
#UB 0 2820 0.00
#UB -3 2822 0.00
#UB -2 2822 0.00
#UB -1 2822 0.00
#UB 0 2822 0.00
#UB -3 2829 0.00
#UB -2 2829 0.00
#UB -1 2829 0.00
#UB 0 2829 0.00
#UB 0 2890 -1218.00
#UB -3 2893 0.00
#UB -2 2893 0.00
#UB -1 2893 0.00
#UB 0 2893 0.00
#UB -5 2898 -103547.44
#UB -4 2898 0.00
#UB -3 2898 0.00
#UB -2 2898 0.00
#UB -1 2898 0.00
#UB 0 2898 0.00
#UB -5 2913 -15337.50
#UB -4 2913 -0.50
#UB -3 2913 -0.50
#UB -2 2913 0.00
#UB -1 2913 0.00
#UB 0 2913 0.00
#RES -1 3011 -33300.00
#RES -1 3740 1.00
#RES 0 3740 -2.47
#RES -1 3930 60.00
#RES -1 6212 6780.00
#RES 0 6212 9914.47
#RES 0 6530 1500.00
#RES -1 6540 10.00
#RES -1 6570 1200.00
#RES 0 6570 1240.00
#RES -1 7699 3040.10
#RES 0 8022 -11721.96
#RES 0 8072 6250.00
#RES -1 8110 -62500.00
#RES -1 8422 3.00
#RES 0 8423 58.00
#RES -1 8910 4750.00
#RES -1 8999 79956.40
#RES 0 8999 -7238.00
#VER "V" "1" 20211230 "Balanserad vinst eller f�rlust" 20220108
{
	#TRANS 2091 {} 82856.89
	#TRANS 2098 {} -82856.89
}
#VER "V" "2" 20210701 "Omf�ring moms" 20220217
{
	#TRANS 1630 {} 7578.00
	#TRANS 1650 {} -7578.00
}
#VER "V" "3" 20220117 "Omf�ring moms" 20220217
{
	#TRANS 1630 {} -5868.00
	#TRANS 2650 {} 5868.00
}
#VER "V" "4" 20220209 "Bet Skattekonto" 20220217
{
	#TRANS 1630 {} -50.00
	#TRANS 1630 {} 5979.00
	#TRANS 1930 {} -5979.00
	#TRANS 8423 {} 50.00
}
#VER "V" "5" 20210701 "F�reg�ende �rs resultat" 20220221
{
	#TRANS 2010 {} 1218.00
	#TRANS 2091 {} -79956.40
	#TRANS 2099 {} 79956.40
	#TRANS 2890 {} -1218.00
}
#VER "V" "6" 20210705 "Hi3g - Mobiltelefon" 20221227
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "7" 20210706 "Banktj�nster - Banktj�nster" 20221227
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "8" 20210803 "Hi3g - Mobiltelefon" 20221227
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "9" 20210804 "Banktj�nster - Banktj�nster" 20221227
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "10" 20210812 "A�tillskott - Aktie�gartillskott" 20221228
{
	#TRANS 1930 {} 750.00
	#TRANS 2093 {} -750.00
}
#VER "V" "11" 20210906 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "12" 20210907 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "13" 20211004 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "14" 20211005 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "15" 20211029 "Holo Health AB Andelar i koncernf�retag" 20221228
{
	#TRANS 1310 {} 25000.00
	#TRANS 1930 {} -25000.00
}
#VER "V" "16" 20211105 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -980.00
	#TRANS 2640 {} 237.29
	#TRANS 3740 {} -0.24
	#TRANS 6212 {} 742.95
}
#VER "V" "17" 20211105 "Annullering av V16: Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} 980.00
	#TRANS 2640 {} -237.29
	#TRANS 3740 {} 0.24
	#TRANS 6212 {} -742.95
}
#VER "V" "18" 20211029 "Annullering av V15: Holo Health AB Andelar i koncernf�retag" 20221228
{
	#TRANS 1310 {} -25000.00
	#TRANS 1930 {} 25000.00
}
#VER "V" "19" 20210929 "Holo Health AB Andelar i koncernf�retag" 20221228
{
	#TRANS 1352 {} 25000.00
	#TRANS 1930 {} -25000.00
}
#VER "V" "20" 20211105 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -980.00
	#TRANS 2640 {} 148.59
	#TRANS 3740 {} -0.24
	#TRANS 6212 {} 831.65
}
#VER "V" "21" 20211105 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "22" 20211122 "A�tillskott - Aktie�gartillskott" 20221228
{
	#TRANS 1930 {} 51000.00
	#TRANS 2093 {} -51000.00
}
#VER "V" "23" 20211123 "Swiperoom AB Andelar" 20221228
{
	#TRANS 1352 {} -50076.00
	#TRANS 1930 {} 50076.00
}
#VER "V" "24" 20211206 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "25" 20211207 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "26" 20211123 "Annullering av V23: Swiperoom AB Andelar" 20221228
{
	#TRANS 1352 {} 50076.00
	#TRANS 1930 {} -50076.00
}
#VER "V" "27" 20211123 "Swiperoom AB Andelar" 20221228
{
	#TRANS 1352 {} 50076.00
	#TRANS 1930 {} -50076.00
}
#VER "V" "28" 20220103 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "29" 20220105 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "30" 20220207 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "31" 20220207 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "32" 20220218 "DeskJockeys" 20221228
{
	#TRANS 1930 {} -1875.00
	#TRANS 2640 {} 375.00
	#TRANS 6530 {} 1500.00
}
#VER "V" "33" 20220224 "F�rs�ljning av andelar i Praventio AB" 20221228
{
	#TRANS 1310 {} -12750.00
	#TRANS 1930 {} 24471.96
	#TRANS 8022 {} -11721.96
}
#VER "V" "34" 20220305 "Kostnadsr�nta SKV" 20221228
{
	#TRANS 1630 {} -8.00
	#TRANS 8423 {} 8.00
}
#VER "V" "35" 20220307 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "36" 20220309 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "37" 20220317 "Forento AB Andelar" 20221228
{
	#TRANS 1352 {} 50009.98
	#TRANS 1930 {} -50009.98
}
#VER "V" "38" 20220318 "A�tillskott - Aktie�gartillskott" 20221228
{
	#TRANS 1930 {} 40000.00
	#TRANS 2093 {} -40000.00
}
#VER "V" "39" 20220404 "Hi3g - Mobiltelefon" 20221228
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "40" 20220406 "Banktj�nster - Banktj�nster" 20221228
{
	#TRANS 1930 {} -100.00
	#TRANS 6570 {} 100.00
}
#VER "V" "41" 20220408 "A�tillskott - Aktie�gartillskott" 20221228
{
	#TRANS 1930 {} 50000.00
	#TRANS 2093 {} -50000.00
}
#VER "V" "42" 20220408 "Rentfair AB Andelar" 20221229
{
	#TRANS 1352 {} 50400.00
	#TRANS 1930 {} -50400.00
}
#VER "V" "43" 20220506 "Hi3g - Mobiltelefon" 20221229
{
	#TRANS 1930 {} -978.00
	#TRANS 2640 {} 148.16
	#TRANS 3740 {} -0.08
	#TRANS 6212 {} 829.92
}
#VER "V" "44" 20220506 "Banktj�nster - Banktj�nster" 20221229
{
	#TRANS 1930 {} -120.00
	#TRANS 6570 {} 120.00
}
#VER "V" "45" 20220607 "Hi3g - Mobiltelefon" 20221229
{
	#TRANS 1930 {} -972.00
	#TRANS 2640 {} 147.00
	#TRANS 3740 {} -0.29
	#TRANS 6212 {} 825.29
}
#VER "V" "46" 20220607 "Banktj�nster - Banktj�nster" 20221229
{
	#TRANS 1930 {} -120.00
	#TRANS 6570 {} 120.00
}
#VER "V" "47" 20220630 "Nedskrivning andelar i Eqwitty AB" 20230128
{
	#TRANS 1318 {} -6250.00
	#TRANS 8072 {} 6250.00
}
#VER "V" "48" 20220630 "Momsredovisning: juli 2021 - juni 2022" 20230128
{
	#TRANS 1650 {} 2141.00
	#TRANS 2640 {} -2141.75
	#TRANS 3740 {} 0.75
}
#VER "V" "49" 20220630 "�rets resultat" 20230128
{
	#TRANS 2099 {} 7238.00
	#TRANS 8999 {} -7238.00
}
`;

// Parse SIE data and extract relevant transactions
function parseSIEData(sieData) {
  const transactions = [];
  const lines = sieData.split("\n");
  let isTransactionSection = false;

  for (const line of lines) {
    if (line.startsWith("#RTRANS")) {
      const transactionData = line.split(" ");
      transactions.push({
        type: "RTRANS",
        amount: parseFloat(transactionData[1]),
        date: new Date(transactionData[2]),
      });
    } else if (line.startsWith("#IB")) {
      const balanceData = line.split(" ");
      transactions.push({
        type: "IB",
        account: balanceData[1],
        amount: parseFloat(balanceData[2]),
      });
    } else if (line.startsWith("{")) {
      isTransactionSection = true;
    } else if (line.startsWith("}")) {
      isTransactionSection = false;
    }
  }

  return transactions;
}

// Calculate revenue growth rate
function calculateRevenueGrowth(transactions) {
  const revenueTransactions = transactions.filter(
    (transaction) =>
      transaction.type === "IB" && transaction.account === "Revenue"
  );

  const growthRates = [];
  for (let i = 1; i < revenueTransactions.length; i++) {
    const currentRevenue = revenueTransactions[i].amount;
    const previousRevenue = revenueTransactions[i - 1].amount;
    const growthRate =
      ((currentRevenue - previousRevenue) / previousRevenue) * 100;
    growthRates.push(growthRate);
  }

  return growthRates;
}

// Example usage
const transactions = parseSIEData(sieData);
const revenueGrowthRates = calculateRevenueGrowth(transactions);
console.log(revenueGrowthRates);
