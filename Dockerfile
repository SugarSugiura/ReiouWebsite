# 使用するベースイメージ
FROM golang:1.22.2 as builder

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のコピーとインストール
COPY go.mod go.sum ./
RUN go mod download

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN go build -gcflags="all=-N -l" -o main

# 実行ステージ
FROM golang:1.22.2 as runtime

# 作業ディレクトリの設定
WORKDIR /app

# ビルドステージから実行可能ファイルをコピー
COPY --from=builder /app/main .
COPY --from=builder /app/.env .
COPY --from=builder /app/web/static .
COPY --from=builder /app/web/template .

# アプリケーションの実行
CMD ["./main"]
