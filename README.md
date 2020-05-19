<h1 id="nodejs-movie-api">Nodejs-Movie-Api</h1>
<p>Nodejs, Express JS ve Mongo DB kullanarak geliştirilen yönetmen, film ve kullanıcı api&#39;larını barındıran bir proje.</p>
<p>Aşağıdaki tablo yönetmen,film ve kullanıcı apinin kullanımını göstermektedir.
<br/></p>
<p><strong>MOVIES</strong></p>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP İsteği</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/movie</td>
<td><code>GET</code></td>
<td>Veritabanında kayıtlı tüm filmleri getirir.</td>
</tr>
<tr>
<td>/api/movie</td>
<td><code>POST</code></td>
<td>Yeni bir film ekler.</td>
</tr>
<tr>
<td>/api/movie/:movie_id</td>
<td><code>PUT</code></td>
<td>Parametre olarak idsi verilen filmin bilgilerini günceller.</td>
</tr>
<tr>
<td>/api/movie/:movie_id</td>
<td><code>DELETE</code></td>
<td>Parametre olarak idsi verilen filmi siler.</td>
</tr>
<tr>
<td>/api/movie/:movie_id</td>
<td><code>GET</code></td>
<td>Parametre olarak idsi verilen filmin bilgilerini getirir.</td>
</tr>
<tr>
<td>/api/movie/top10</td>
<td><code>GET</code></td>
<td>Filmlerden IMDB puanı en yüksek 10 filmi getirir.</td>
</tr>
<tr>
<td>/api/movie/between/:start_year/:end_year</td>
<td><code>GET</code></td>
<td>Parametre olarak verilen başlangıç ve bitiş yıllarına göre filmlerden bu aralıkta olanları getirir.</td>
</tr>
</tbody>
</table>
<p><br/></p>
<p><strong>DIRECTOR</strong></p>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP İsteği</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/director</td>
<td><code>GET</code></td>
<td>Veritabanında kayıtlı tüm yönetmenleri getirir.</td>
</tr>
<tr>
<td>/api/director</td>
<td><code>POST</code></td>
<td>Yeni bir yönetmen ekler.</td>
</tr>
<tr>
<td>/api/director/:directorId</td>
<td><code>PUT</code></td>
<td>Parametre olarak idsi verilen yönetmenin bilgilerini günceller.</td>
</tr>
<tr>
<td>/api/director/:directorId</td>
<td><code>DELETE</code></td>
<td>Parametre olarak idsi verilen yönetmeni siler.</td>
</tr>
<tr>
<td>/api/director/:directorId</td>
<td><code>GET</code></td>
<td>Parametre olarak idsi verilen yönetmenin bilgilerini getirir.</td>
</tr>
</tbody>
</table>
<p><strong>USER</strong></p>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP İsteği</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>/register</td>
<td><code>POST</code></td>
<td>Yeni bir kullanıcı oluşturulur</td>
</tr>
<tr>
<td>/login</td>
<td><code>POST</code></td>
<td>Kullanıcı girişi yapmaya olanak verir.</td>
</tr>
</tbody>
</table>

<br/>
Yukarıdaki tabloda gösterilen tüm API'lar birim testinden geçmiştir.
<br/>

![API Unit Test](https://github.com/vurucuorhan17/Nodejs-Movie-Api/blob/master/api-test.png)