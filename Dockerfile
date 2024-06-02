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

RUN go install github.com/cosmtrek/air@latest

# 実行ステージ
FROM golang:1.22.2 as runtime

# 作業ディレクトリの設定
WORKDIR /app

# ビルドステージから実行可能ファイルをコピー
COPY --from=builder /app/main .
COPY --from=builder /app/.env .
COPY --from=builder /app/web/template ./web/template
COPY --from=builder /app/web/static ./web/static

COPY --from=builder /go/bin/air /usr/local/bin/
COPY --from=builder /app/.air.toml /app/.air.toml

# アプリケーションの実行
CMD ["air", "-c", ".air.toml"]
