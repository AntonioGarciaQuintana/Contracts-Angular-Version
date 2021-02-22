namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addPaymentContract : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Payments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 150),
                        Type = c.Int(nullable: false),
                        Method = c.Int(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Date = c.DateTime(nullable: false),
                        Bank = c.String(maxLength: 100),
                        NoCheck = c.String(maxLength: 100),
                        NameImage = c.String(),
                        Base = c.String(),
                        Description = c.String(maxLength: 500),
                        IdContract = c.Int(nullable: false),
                        CreationDate = c.DateTime(nullable: false),
                        LastUpdate = c.DateTime(nullable: false),
                        isDelete = c.Boolean(nullable: false),
                        Contract_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.tblContracts", t => t.Contract_Id)
                .Index(t => t.Contract_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Payments", "Contract_Id", "dbo.tblContracts");
            DropIndex("dbo.Payments", new[] { "Contract_Id" });
            DropTable("dbo.Payments");
        }
    }
}
