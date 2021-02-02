namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change_datetimeType_Contract : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.tblContracts", "EndDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.tblContracts", "EndDate", c => c.String(nullable: false));
        }
    }
}
