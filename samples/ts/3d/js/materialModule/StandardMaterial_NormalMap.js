var StandardMaterial_NormalMap = (function () {
    function StandardMaterial_NormalMap() {
        this.normalMapUrl = ["../../res/threeDimen/staticModel/lizardCal/rock_norm.png", "../../res/threeDimen/staticModel/lizardCal/lizard_norm.png", "../../res/threeDimen/staticModel/lizardCal/lizard_norm.png"];
        Laya3D.init(0, 0, true);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
        this.scene = Laya.stage.addChild(new Laya.Scene());
        this.rotation = new Laya.Vector3(0, 0.01, 0);
        var camera = (this.scene.addChild(new Laya.Camera(0, 0.1, 100)));
        camera.transform.translate(new Laya.Vector3(0, 0.6, 1.1));
        camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        var directionLight = this.scene.addChild(new Laya.DirectionLight());
        directionLight.direction = new Laya.Vector3(0, -0.8, -1);
        directionLight.color = new Laya.Vector3(1, 1, 1);
        Laya.loader.create("../../res/threeDimen/staticModel/lizardCal/lizardCaclute.lh", Laya.Handler.create(this, this.onComplete));
    }
    StandardMaterial_NormalMap.prototype.onComplete = function () {
        var monster1 = this.scene.addChild(Laya.Sprite3D.load("../../res/threeDimen/staticModel/lizardCal/lizardCaclute.lh"));
        monster1.transform.position = new Laya.Vector3(-0.6, 0, 0);
        monster1.transform.localScale = new Laya.Vector3(0.002, 0.002, 0.002);
        var monster2 = Laya.Sprite3D.instantiate(monster1, this.scene, false, new Laya.Vector3(0.6, 0, 0));
        monster2.transform.localScale = new Laya.Vector3(0.002, 0.002, 0.002);
        for (var i = 0; i < monster2._childs.length; i++) {
            var meshSprite3D = monster2._childs[i];
            var material = meshSprite3D.meshRender.material;
            //法线贴图
            material.normalTexture = Laya.Texture2D.load(this.normalMapUrl[i]);
        }
        Laya.timer.frameLoop(1, this, function () {
            monster1.transform.rotate(this.rotation);
            monster2.transform.rotate(this.rotation);
        });
    };
    return StandardMaterial_NormalMap;
}());
new StandardMaterial_NormalMap;
