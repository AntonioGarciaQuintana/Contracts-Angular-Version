namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changerelationalimageContract : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ImageContracts", "Id", "dbo.tblContracts");
            DropIndex("dbo.ImageContracts", new[] { "Id" });
            AddColumn("dbo.ImageContracts", "Contract_Id", c => c.Int());
            CreateIndex("dbo.ImageContracts", "Contract_Id");
            AddForeignKey("dbo.ImageContracts", "Contract_Id", "dbo.tblContracts", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ImageContracts", "Contract_Id", "dbo.tblContracts");
            DropIndex("dbo.ImageContracts", new[] { "Contract_Id" });
            DropColumn("dbo.ImageContracts", "Contract_Id");
            CreateIndex("dbo.ImageContracts", "Id");
            AddForeignKey("dbo.ImageContracts", "Id", "dbo.tblContracts", "Id");
        }
    }
}
