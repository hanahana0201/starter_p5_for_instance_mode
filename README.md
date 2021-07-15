# Starter_p5_for_instance_mode

P5.jsのinstance mode用のスターターテンプレートです。

## 現状わかっている問題点

- importでnode_modulesのp5を読み込むことは可能。p5.js-svgは、importで読み込み不可。p5.js-svgのscriptタグで読み込むのも不可。

- ローカルにp5.js,p5.svg.jsをおいて、parcelで開くとうまく行かない。sketch.jsとしてindex.htmlをブラウザに読み込む分には問題なし。
