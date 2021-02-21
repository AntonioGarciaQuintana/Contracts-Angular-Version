using ContractsApplication.Models;
using ContractsApplication.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContractsApplication.Service.Interfaces
{
    public interface IContractService
    {
        void SaveOrUpdateContract(Contracts contract);
        void DeleteContract(int id);
        IList<Contracts> GetAllContracts();
        Contracts GetContractById(int id);

        DataTableDto<Contracts> GetPages(int page, int size, string sort, string search);

        List<ImageContract> GetAllImagesContract(int idContract);

        void DeleteImageContract(int idImage);

        void SaveImageContract(ImageContract imageContract);

    }
}
