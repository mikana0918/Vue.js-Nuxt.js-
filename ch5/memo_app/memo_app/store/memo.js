//モジュールモード記法
//クラシックモードであれば、全てを1つの変数にパッケージ化し、export defaultする？

export const state = () => ({
    memo: [], //メモを格納する配列: {title: '', content:'', created: ''}
    page: 0
})

export const mutations = {

    insert: function(state, obj) {
        var d = new Date();
        var createdAt = d.getFullYear() + '-' + (d.getMonth() + 1)
            + '-' + d.getDate() + '' + d.getHours() + ':'
            + d.getMinutes();
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: createdAt
        });
    },

    set_page: function(state, p) {
        state.page = p;
    },
    //objはおそらくsel_flg : bool
    remove: function(state, obj) {
        var num = 0;
        //メモ配列の中身を回す？
        for (let i=0; i < state.memo.length; i++) {
            const ob = state.memo[i]; //i番目のメモ
            //渡されたメモの中身が渡されたオブジェクトであれば、それを返す（ゴミだろ...)
            if (ob.title == obj.title　
                    && ob.content == obj.content
                    && ob.created ==obj.title) {
                        alert('remove it! --' + ob.title);
                        state.memo.splice(i, 1); //key：i番目で1つの要素をsplice
                    }
        }
    }
}