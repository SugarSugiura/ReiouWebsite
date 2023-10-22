# Goの公式イメージをベースにする
FROM golang:latest

# 作業ディレクトリを設定
WORKDIR /app

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN go build -o main

# アプリケーションを実行
CMD ["./main"]
