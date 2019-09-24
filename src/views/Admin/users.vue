<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.data }}</span>
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
  </div>
</template>

<script>
import { get_userList, updateFreeze } from "../../api/admin";
export default {
  data() {
    return {
      tableData: []
    };
  },

  mounted() {
    get_userList().then(res => {
      if (res.status === 0) {
        this.tableData = res.data.userList;
      }
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
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
            this.tableData[index].isFreeze=!row.isFreeze
            console.log(this.tableData[index].isFreeze)
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
    }
  }
};
</script>