namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddFinalizeColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.tblContracts", "IsFinalize", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.tblContracts", "IsFinalize");
        }
    }
}
