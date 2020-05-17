# Nodejs-Movie-Api

Nodejs, Express JS ve Mongo DB kullanarak geliştirilen yönetmen, film ve kullanıcı api'larını barındıran bir proje.

Aşağıdaki tablo yönetmen,film ve kullanıcı apinin kullanımını göstermektedir.
<br/>

**MOVIES**

|         Route       |HTTP İsteği                          |Açıklama                       |
|----------------|---------------------|-----------------------------|-----------------------|
|/api/movie|`GET`            |Veritabanında kayıtlı tüm filmleri getirir.            |
|/api/movie          |`POST`            |     Yeni bir film ekler.      |
|/api/movie/:movie_id          |`PUT`|Parametre olarak idsi verilen filmin bilgilerini günceller.|
|/api/movie/:movie_id            |`DELETE`|Parametre olarak idsi verilen filmi siler.|
|/api/movie/:movie_id          |`GET`|Parametre olarak idsi verilen filmin bilgilerini getirir.|
|/api/movie/top10          |`GET`|Filmlerden IMDB puanı en yüksek 10 filmi getirir.|
|/api/movie/between/:start_year/:end_year          |`GET`|Parametre olarak verilen başlangıç ve bitiş yıllarına göre filmlerden bu aralıkta olanları getirir.|

<br/>

**DIRECTOR**


|         Route       |HTTP İsteği                          |Açıklama                       |
|----------------|---------------------|-----------------------------|-----------------------|
|/api/director|`GET`            |Veritabanında kayıtlı tüm yönetmenleri getirir.            |
|/api/director          |`POST`            |     Yeni bir yönetmen ekler.      |
|/api/director/:directorId           |`PUT`|Parametre olarak idsi verilen yönetmenin bilgilerini günceller.|
|/api/director/:directorId           |`DELETE`|Parametre olarak idsi verilen yönetmeni siler.|
|/api/director/:directorId          |`GET`|Parametre olarak idsi verilen yönetmenin bilgilerini getirir.|


**USER**

|         Route       |HTTP İsteği                          |Açıklama                       |
|----------------|---------------------|-----------------------------|-----------------------|
|/register|`POST`            |Yeni bir kullanıcı oluşturulur            |
|/login         |`POST`            |Kullanıcı girişi yapmaya olanak verir.      |
