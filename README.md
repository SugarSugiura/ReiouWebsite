## 準備

### Dockerをインストール
https://www.docker.com/products/docker-desktop/

### Goをインストール
https://go.dev/doc/install

<details><summary>Brewを使っている場合</summary><div>

```bash
brew install go
```
</div></details>

`.env` を誰かから受け取って、プロジェクトのルートに配置する

## 起動

```bash
go run main.go
```

http://localhost:8000/page/landing.html にアクセス

ログインを試す場合は、http://localhost:8000/login にアクセス

<details><summary>Dockerで起動する場合</summary><div>

```bash
docker compose up --build
```
</div></details>

### Redis

```bash
brew install redis
```

redis-cli を使用して接続する 

```bash
redis-cli
```
