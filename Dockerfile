# 使用するnode.jsのイメージを指定
FROM node:20.11.0

# コンテナ内での作業ディレクトリを指定。以降のコマンド(命令)は、指定したディレクトリ内で実施される。
WORKDIR /app

# activities.json, index.jsとpackage.json/package-lock.jsonを作業ディレクトリ(appディレクトリ)へコピー
COPY ./index.html .
COPY ./activities.json .
COPY ./index.js .
COPY ./package*.json .

# npmをインストールし、必要な依存関係をインストールする。
RUN npm install

# 5000番ポートを解放する
EXPOSE 5000

# コンテナが起動した時の起動コマンドを設定。
CMD ["node", "index.js"]
