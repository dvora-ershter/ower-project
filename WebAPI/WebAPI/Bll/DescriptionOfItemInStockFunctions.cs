using Dal;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class DescriptionOfItemInStockFunctions
    {
        static DataEntities data = new DataEntities();
        public static void addDiscreptionOfItemInStock(DescriptionOfItemInStockDTO descriptionOfItemInStockDTO)
        {
            data.DescriptionOfItemInStock.Add(DescriptionOfItemInStockDTO.ConvertFromDTO(descriptionOfItemInStockDTO));
        }
        public static List<ItemInStockNameDTO> getItemInStockNameListByItemId(int itemId)
        {
            int descriptionOfItemId = DescriptionOfItemFunctions.getMainDescriptionOfItemIdByItemId(itemId);
            List<int> itemInStockIdList = new List<int>();
            itemInStockIdList = ItemInStockFunctions.getItemInStockIdListByItemId(itemId);
            List<ItemInStockNameDTO> itemInStockNameList = new List<ItemInStockNameDTO>();
            foreach (int itemInStockId in itemInStockIdList)
            {
                ItemInStockNameDTO itemInStockName=new ItemInStockNameDTO();
                itemInStockName.MainDescriptionofItemValue = data.DescriptionOfItemInStock.
                FirstOrDefault(x => x.DescriptionOfItemId == descriptionOfItemId && x.ItemInStockId == itemInStockId).Value;
                itemInStockName.ItemInstockId = itemInStockId;
                itemInStockNameList.Add(itemInStockName);
            } 
            return itemInStockNameList;
        }
    }
}

//==================================================
