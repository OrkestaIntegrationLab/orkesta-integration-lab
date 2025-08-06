using Newtonsoft.Json;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Utils
{
    public static class JsonUtils
    {
        public static T DeserializeObjectOrDefault<T>(string json, T defaultValue)
        {
            json ??= string.Empty;
            T result = JsonConvert.DeserializeObject<T>(json);
            return result ?? defaultValue;
        }
    }
}
