
<!-- 非table分割 border可内外相同 可内外不同-->
<!-- <template>
  <div>
    <div>
      <h1>
        网状边框demo
      </h1>
      <div class="box" :style="getBoxStyle()">
        <ul>
          <li v-for='cell in cells' :style="getCellStyle(cell)"></li>
        </ul>

      </div>

    </div>
  </div>
</template>
<style>
  .box {
    margin: 30px 20px auto;
  }

  .box ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
  }

  .box ul li {
    float: left;
    list-style: none;
  }

</style>
<script>
  export default {
    data() {
      return {
        cells: [],
        boxColumnCount: 4,
        boxRowCount: 6,
        boxWidth: 600,
        boxHeight: 400,
        borderWidth: 1
      }
    },
    methods: {
      fillCells() {
        for (var j = 0; j < this.boxRowCount; j++) {
          for (var i = 0; i < this.boxColumnCount; i++) {
            this.cells.push({
              w: i + 1,
              h: j + 1
            });
          }
        }
      },
      getCellStyle(cell) {
        var d = {};
        var width = (this.boxWidth - ((this.boxColumnCount - 1) * this.borderWidth)) / this.boxColumnCount;
        var height = (this.boxHeight - ((this.boxRowCount - 1) * this.borderWidth)) / this.boxRowCount;
        var borderright = ""
        var borderBottom = "";
        if (cell.w % this.boxColumnCount != 0) {
          borderright = this.borderWidth + "px dashed blueviolet"
        }
        if (cell.h % this.boxRowCount != 0) {
          borderBottom = this.borderWidth + "px dashed blueviolet"
        }
        return "width:" + width + "px;height:" + height + "px; border-right:" + borderright + ";border-bottom:" +
          borderBottom;
      },
      getBoxStyle() {
        return "width:" + this.boxWidth + "px;height:" + this.boxHeight + "px; border: " + this.borderWidth +
          "px solid red;";
      }
    },
    mounted() {
        // 填充单元格
      this.fillCells();
    }
  }

</script> -->

<!-- Table分割 border 内外相同-->
<!-- <template>
  <div>
    <div>
      <h1>
        网状边框demo
      </h1>
      <table class="box">
        <tr v-for=" rowIndex in boxRowCount" >
 <td v-for=" columnIndex in boxColumnCount " :style="getCellStyle()"></td>
        </tr>
      </table>

    </div>
  </div>
</template>
<style>
 .box{
   padding: 0px;
   border-collapse:collapse;
   width:600px;
   height:400px;
 }
 .box tr{
   width:100%;
 }
 .box tr td{
  border:1px solid blueviolet
 }
 

</style>
<script>
  export default {
    data() {
      return {
        cells: [],
        boxColumnCount: 4,
        boxRowCount: 6,
      }
    },
    methods: {
      getCellStyle() {
        var width = this.boxWidth / this.boxColumnCount;
        var height = this.boxHeight / this.boxRowCount;
        return "width:" + width + "px;height:" + height + "px";
      }
    },
    mounted() {
    }
  }

</script> -->
