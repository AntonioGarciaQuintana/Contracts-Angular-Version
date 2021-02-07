namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedStringLengthDesription : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.tblContracts", "Description", c => c.String(maxLength: 500));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.tblContracts", "Description", c => c.String());
        }
    }
}
