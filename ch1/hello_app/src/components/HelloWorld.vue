<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      title: 'JSX',
      message: 'これは、dataに用意したメッセージです'
    };
  },
  render: function(h) {
    h
    return (
      <div> 
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    margin: 0px;
    padding: 0px;
    text-align: left;
  }

  h1 {
    font-size:72pt;
    font-weight: bold;
    text-align: right;
    letter-spacing:-8px;
    color: #f0f0f0;
    margin:0px;
  }

  p {
    margin:0px;
    color: #666;
    font-size:16pt;
  }

  pre {
    font-size:14pt;
    line-height: 1.25;
  }

  div.out {
    padding: 5px 0px;
    background-color: #eee;
    width: 300px;
    height: 200px;
  }

  div.mid {
    padding: 5px 0px;
    background-color: #ddd;
    width: 200px;
    height: 175px;
  }

  div.in {
    padding: 5px 0px;
    background-color: #ccc;
    width:100px;
    height: 150px;
  }

  .area {
    width: 300px;
    height: 100px;
    background-color: #ddd;
    padding: 10px;
    font-size: 20pt;
  }

  .inner {
    color:red;
    font-size:14pt;
  }

  .etc {
    color:green;
    background-color: #eee;
    font-size: 12pt;
    padding:5px;
  }
</style>
