<template>
  <div>
    <el-table :data="nowTableData" style="width: 100%">
      <el-table-column label="头像">
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            <img :src="scope.row.userHead" class="userHead" />
          </span>
        </template>
      </el-table-column>

      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.data |dateformat("YYYY-MM-DD HH:mm")}}</span>
        </template>
      </el-table-column>

      <el-table-column label="用户名">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>用户: {{ scope.row.username }}</p>
            <p>邮箱: {{ scope.row.email }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.username }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="邮箱">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >{{scope.row.isFreeze ? '已冻结' :'未冻结'}}</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      @size-change="handleSizeChange"
      :page-sizes="[ 5, 10, 50, 100]"
      :current-page.sync="currentPage"
      :total="tableData.length"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>

<script>
import { get_userList, updateFreeze, deleteUser } from "../../api/admin";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页
      pageSize: 5 // 每一页多少条数据
    };
  },

  mounted() {
    get_userList().then(res => {
      if (res.status === 0) {
        this.tableData = res.data.userList;
      }
    });
  },

  computed: {
    nowTableData() {
      return (
        this.tableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        ) || []
      );
    }
  },
  methods: {
    handleEdit(index, row) {
      let messages = !row.isFreeze
        ? " 此操作将冻结该用户, 是否继续?"
        : "此操作将解除冻结, 是否继续?";
      this.$confirm(messages, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          updateFreeze(row.email, !row.isFreeze).then(res => {
            this.$message({
              type: "success",
              message: "操作成功"
            });
            this.nowTableData[index].isFreeze = !row.isFreeze;
          });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "操作取消"
          });
        });
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm(" 此操作将删除该用户, 是否继续?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteUser(row.email).then(res => {
            this.$message({
              type: "success",
              message: "删除成功"
            });
            this.tableData.splice(index, 1);
          });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "操作取消"
          });
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
    }
  }
};
</script>

<style lang="scss" scope>
  .userHead{
    width: 40px
  }
</style>