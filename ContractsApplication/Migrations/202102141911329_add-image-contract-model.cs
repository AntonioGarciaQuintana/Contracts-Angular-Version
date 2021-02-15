namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addimagecontractmodel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ImageContracts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Base = c.String(),
                        IsDeelte = c.Boolean(nullable: false),
                        IdContract = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.tblContracts", t => t.Id)
                .Index(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ImageContracts", "Id", "dbo.tblContracts");
            DropIndex("dbo.ImageContracts", new[] { "Id" });
            DropTable("dbo.ImageContracts");
        }
    }
}
