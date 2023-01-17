using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Todo;

[Dependency(ReplaceServices = true)]
public class TodoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Todo";
}
